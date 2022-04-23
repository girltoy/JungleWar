/**
 * This is an example React component that renders a form that allows the user to select
 * a file to send to the Image-Based Geolocation model. Once the form is submitted,
 * the results.json output is fetched and displayed below the form
 */
import { useState } from "react";

import { ModzyClient } from "@modzy/modzy-sdk";

export default function TextToSpeech() {
  const [isWorking, setWorking] = useState(false);

  // This function is called once the user submits the form
  async function handleSubmit(event) {
    event.preventDefault();
    setWorking(true);

   