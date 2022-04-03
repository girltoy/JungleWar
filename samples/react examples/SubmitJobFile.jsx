/**
 * This is an example React component that renders a form that allows the user to select
 * a file to send to the Image-Based Geolocation model. Once the form is submitted,
 * the results.json output is fetched and displayed below the form
 */
import { useState } from "react";

import { ModzyClient } from "@modzy/modzy-sdk";

export default function SubmitJobFile() {
  const [output, setOutput] = useState();

  // This function is called once the user submits the form
  async function handleSubmit(event) {
    event.preventDefault();

    // initialize the client
    const modzyClient = new ModzyClient({
      apiKey: "XXXXXX.XXXXXX", // Your API key here
    });

    try {
      // get the file from the submit event
      const file = new FormData(event.currentTarget).get("fileInput");

      // If there's a file, then we submit the job
      if (file) {
        const { jobIdentifier } = await modzyClient.submitJobFile({
          modelId: "aevbu1h3yw",
          version: "1.0.1",
          sources: {
            [file.name]: {
              image: file,
            },
          },
        });

        // Wait for the job to complete
        await modzyClient.blockUntilJobComplete(jobIdentifier);

        // Get the output contents
        const outputConten