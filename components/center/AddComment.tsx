"use client";

import { createComment } from "@/actions/comment";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import React, { useRef } from "react";

function AddComment({ postid }: { postid: number }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await createComment(formData, postid);

    if (result.message) {
      toast.success(result.message);
      router.refresh();
    } else if (result.error) {
      toast.error(result.error);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        handleSubmit(formData);
      }
    }
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="bg-slate-100 rounded-3xl flex p-2 flex-1 justify-between"
    >
      <input
        placeholder="Add comment"
        name="desc"
        type="text"
        className="bg-transparent outline-none flex-1"
        onKeyPress={handleKeyPress}
      />
      <span className=" cursor-pointer">😉</span>
    </form>
  );
}

export default AddComment;
