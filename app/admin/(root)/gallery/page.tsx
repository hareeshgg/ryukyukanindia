"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { UploadDropzone } from "../../UploadDropZone";
import { AdminNavbar } from "../../adminNavbar";
import { Calendar32 } from "../../Calendar";
import { supabase } from "@/lib/lib";
import { toast } from "sonner";

type UploadImage = {
  file: File;
  preview: string;
  progress: number; // 0–100
};

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [images, setImages] = useState<UploadImage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFilesSelected = (files: File[]) => {
    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      progress: 0,
    }));

    setImages((prev) => [...prev, ...mapped]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const uploadToCloudinary = async (images: UploadImage[], folder: string) => {
    const sigRes = await fetch("/api/cloudinary", {
      method: "POST",
      body: JSON.stringify({ folder }),
    });

    const { cloudName, apiKey, timestamp, signature } = await sigRes.json();

    const uploads = images.map(
      (img, index) =>
        new Promise<string>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const formData = new FormData();

          formData.append("file", img.file);
          formData.append("api_key", apiKey);
          formData.append("timestamp", timestamp.toString());
          formData.append("signature", signature);
          formData.append("folder", folder);

          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              const percent = Math.round((e.loaded / e.total) * 100);
              setImages((prev) =>
                prev.map((item, i) =>
                  i === index ? { ...item, progress: percent } : item,
                ),
              );
            }
          };

          xhr.onload = () => {
            const res = JSON.parse(xhr.responseText);
            resolve(res.secure_url);
          };

          xhr.onerror = reject;

          xhr.open(
            "POST",
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          );
          xhr.send(formData);
        }),
    );

    return Promise.all(uploads);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!date || images.length === 0) {
        toast.error("Missing date or images");
        return;
      }
      console.log("Selected images:", images.length, images);

      const formattedDate = date.toISOString().split("T")[0];

      // 🔥 folder name from title (safe)
      const folderName = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      // 1️⃣ Upload images to Cloudinary
      const imageUrls = await uploadToCloudinary(images, folderName);

      // 2️⃣ Save metadata to Supabase
      const { error } = await supabase.from("gallery").insert({
        title,
        description,
        date: formattedDate,
        images: imageUrls,
        folder: folderName,
      });

      if (error) throw error;

      toast.success("Images uploaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setTitle("");
      setDescription("");
      setImages([]);
      setDate(undefined);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, []);

  return (
    <>
      <AdminNavbar />
      <section className="py-4 md:py-8">
        <div className="mx-auto max-w-3xl px-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Images</CardTitle>
              <CardDescription>
                Select images to display on the gallery page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Field>
                      <FieldLabel htmlFor="title">Title</FieldLabel>
                      <Input
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        id="title"
                        type="text"
                        placeholder=" All India Kobudo Tournament xxxx"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="date">Date</FieldLabel>
                      <Calendar32 value={date} onChange={setDate} />
                    </Field>
                  </div>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="description">Description</FieldLabel>
                    </div>
                    <Input
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      id="description"
                      type="textbox"
                      placeholder="Ex.A glimpse of the Kobudo Tournament"
                      required
                    />
                  </Field>

                  {/* <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="image">Image</FieldLabel>
                  </div>
                  <Input
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    id="image"
                    type="file"
                    required
                  />
                </Field> */}
                  <Field>
                    <UploadDropzone
                      disabled={false}
                      onFileSelected={handleFilesSelected}
                    />
                  </Field>
                  <Field>
                    {images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {images.map((img, index) => (
                          <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden border"
                          >
                            <img
                              src={img.preview}
                              alt="preview"
                              className="h-32 w-full object-cover"
                            />

                            {/* Remove button */}
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                            >
                              Remove
                            </button>

                            {/* Progress bar */}
                            {loading && (
                              <div className="absolute bottom-0 left-0 w-full bg-black/40">
                                <div
                                  className="h-1 bg-green-500 transition-all"
                                  style={{ width: `${img.progress}%` }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Field>
                  <Field>
                    <Button
                      type="submit"
                      className="bg-white text-black cursor-pointer hover:bg-neutral-300"
                    >
                      {loading == true ? <Loader /> : "Upload"}
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default page;
