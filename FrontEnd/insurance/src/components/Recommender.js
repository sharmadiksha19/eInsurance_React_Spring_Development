import { Configuration, OpenAIApi } from "openai";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";

let response = {};

class Recommender {
  fetch = async (object, price1, price2, price3) => {
    const config = new Configuration({
      organization: "org-XIHXjbcXmQcosB5Nxb3GF2YK",
      apiKey: "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",
    });

    const openai = new OpenAIApi(config);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            object +
            "For the above json recommend the best package out of the following:\n\n" +
            "1. Premium (price per month = $" +
            price1 +
            ")\n" +
            "2. Super (price per month = $" +
            price2 +
            ")\n" +
            "3. Basic (price per month = $" +
            price3 +
            ")\n\n" +
            "The packages are based on the factors from above json:\n" +
            "1. Premium: dependent\n" +
            "2. Super: weight\n" +
            "3. Basic: smoking\n\n" +
            "Recommend in one word",
        },
      ],
    });

    return completion.data.choices[0].message.content;
  };

  fetchRe = async (object, price1, price2, price3) => {
    const config = new Configuration({
      organization: "org-XIHXjbcXmQcosB5Nxb3GF2YK",
      apiKey: "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",
    });

    const openai = new OpenAIApi(config);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            object +
            "For the above json recommend the best package out of the following:\n\n" +
            "1. Premium (price per month = $" +
            price1 +
            ")\n" +
            "2. Super (price per month = $" +
            price2 +
            ")\n" +
            "3. Basic (price per month = $" +
            price3 +
            ")\n\n" +
            "The packages are based on the factors from above json:\n" +
            "1. Premium: vehicleUsage\n" +
            "2. Super: Mileage\n" +
            "3. Basic: safetyFeatures\n\n" +
            "Recommend in one word",
        },
      ],
    });

    return completion.data.choices[0].message.content;
  };

  fetchRent = async (object, price1, price2, price3) => {
    const config = new Configuration({
      organization: "org-XIHXjbcXmQcosB5Nxb3GF2YK",
      apiKey: "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",
    });

    const openai = new OpenAIApi(config);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            object +
            "For the above json recommend the best package out of the following:\n\n" +
            "1. Premium (price per month = $" +
            price1 +
            ")\n" +
            "2. Super (price per month = $" +
            price2 +
            ")\n" +
            "3. Basic (price per month = $" +
            price3 +
            ")\n\n" +
            "The packages are based on the factors from above json:\n" +
            "1. Premium: estimatedPropertyValue\n" +
            "2. Super: NoOfOccupants\n" +
            "3. Basic: policyTerm\n\n" +
            "Recommend in one word",
        },
      ],
    });

    return completion.data.choices[0].message.content;
  };
}

export default new Recommender();
