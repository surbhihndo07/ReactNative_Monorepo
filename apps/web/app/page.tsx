"use client";

import { apiService, getApiBaseUrl } from "@repo/shared";
import { Button } from "@repo/ui";

import styles from "../styles/index.module.css";

export default function Web() {
  const handlePost = async () => {
    try {
      const payload = { title: "Hello from web", body: "Sample post" };
      const response = await apiService.post("/posts", payload);
      console.log("Web post response", response);
      console.log("API base URL", getApiBaseUrl());
      alert("Post successful: " + JSON.stringify(response));
    } catch (error) {
      console.error(error);
      alert("Post failed: " + String(error));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={handlePost} text="Boop" />
    </div>
  );
}
