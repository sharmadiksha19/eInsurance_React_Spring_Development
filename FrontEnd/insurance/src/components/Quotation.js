class Quotation {
  getReQuote(values) {
    let packages = {
      Premium: "",
      Super: "",
      Basic: "",
    };

    var Mileage = values.Mileage;
    var Year = values.Year;
    var safetyFeatures = values.safetyFeatures === "yes";
    var policyTerm = values.policyTerm;
    var vehicleUsage = values.vehicleUsage === "COMMERCIAL";
    let price = 100;

    if (Mileage < 10000) {
      price = 120;
    } else if (Mileage < 20000) {
      price = 140;
    } else if (Mileage < 50000) {
      price = 160;
    } else {
      price = 180;
    }

    if (Year <= 2000) {
      price += 10;
    } else if (Year <= 2010) {
      price += 20;
    } else if (Year <= 2020) {
      price += 30;
    }

    if (!safetyFeatures) {
      price += 50;
    }

    if (!vehicleUsage) {
      packages.Premium = price * 0.9;
    } else {
      packages.Premium = price;
    }

    if (safetyFeatures) {
      packages.Basic = price * 0.8;
    } else {
      packages.Basic = price;
    }

    if (Mileage < 10000) {
      packages.Super = price * 0.96;
    } else if (Mileage < 20000) {
      packages.Super = price * 0.92;
    } else if (Mileage < 50000) {
      packages.Super = price * 0.88;
    } else {
      packages.Super = price * 0.84;
    }

    return packages;
  }

  getRenterQuote(values) {
    let packages = {
      Premium: "",
      Super: "",
      Basic: "",
    };

    var estimatedPropertyValue = values.estimatedPropertyValue;
    var Pets = values.Pets;
    var squareFootage = values.squareFootage;
    var propertyType = values.propertyType;
    // var vehicleUsage = values.vehicleUsage === "COMMERCIAL";
    let price = 100;

    if (Pets < 3) {
      price = 120;
    } else if (Pets < 6) {
      price = 140;
    } else if (Pets < 9) {
      price = 160;
    } else {
      price = 180;
    }

    if (estimatedPropertyValue < 10000000) {
      price += 120;
    } else if (estimatedPropertyValue < 50000000) {
      price += 140;
    } else if (estimatedPropertyValue < 100000000) {
      price += 160;
    } else {
      price += 180;
    }

    if (propertyType === "ApartmentCondo") {
      packages.Premium += price * 0.4;
      packages.Basic = packages.Premium * 0.8; // Basic coverage is 80% of Premium
      packages.Super = packages.Premium * 1.25; // Super coverage is 125% of Premium
    } else if (propertyType === "SingleFamilyHome") {
      packages.Premium = price * 0.3;
      packages.Basic = packages.Premium * 0.8; // Basic coverage is 80% of Premium
      packages.Super = packages.Premium * 1.5; // Super coverage is 150% of Premium
    } else if (propertyType === "Townhouse") {
      packages.Premium = price * 0.2;
      packages.Basic = packages.Premium * 0.6; // Basic coverage is 60% of Premium
      packages.Super = packages.Premium * 0.8; // Super coverage is 80% of Premium
    } else if (propertyType === "StudentHousing") {
      packages.Premium = price * 0.1;
      packages.Basic = packages.Premium * 0.8; // Basic coverage is 80% of Premium
      packages.Super = packages.Premium * 1.5; // Super coverage is 150% of Premium
    } else if (propertyType === "VacationRental") {
      packages.Premium = price * 0.5;
      packages.Basic = packages.Premium * 0.8; // Basic coverage is 80% of Premium
      packages.Super = packages.Premium * 1.25; // Super coverage is 125% of Premium
    } else {
      // Default prices if the property type is unknown
      packages.Premium = price;
      packages.Basic = packages.Premium * 0.8; // Basic coverage is 80% of Premium
      packages.Super = packages.Premium * 1.5; // Super coverage is 150% of Premium
    }

    if (squareFootage < 1500) {
      packages.Basic += packages.Premium + 20;
      packages.Premium += packages.Basic * 1.5; // Premium coverage is 150% of Basic
      packages.Super += packages.Basic * 2; // Super coverage is 200% of Basic
    } else if (squareFootage < 2500) {
      packages.Premium += packages.Premium + 40;
      packages.Basic += packages.Premium * 0.67; // Basic coverage is 67% of Premium
      packages.Super += packages.Premium * 1.33; // Super coverage is 133% of Premium
    } else {
      packages.Super += packages.Super;
      packages.Basic += packages.Super * 0.5; // Basic coverage is 50% of Super
      packages.Premium += packages.Super * 1.5; // Premium coverage is 150% of Super
    }
    return packages;
  }

  getHealthQuote(values) {
    let packages = {
      Premium: "",
      Super: "",
      Basic: "",
    };

    var weight = values.weight;
    var dependent = values.dependent;
    var smoking = values.smoking === "yes";
    let price = 100;

    if (weight < 40) {
      price = 120;
    } else if (weight < 100) {
      price = 140;
    } else if (weight < 200) {
      price = 160;
    } else {
      price = 180;
    }

    if (dependent === 1) {
      price += 20;
    } else if (dependent === 2) {
      price += 20;
    } else if (dependent === 3) {
      price += 20;
    } else if (dependent === 4) {
      price += 20;
    } else if (dependent === 5) {
      price += 20;
    }

    if (smoking) {
      price += 50;
    }

    if (dependent !== 0) {
      packages.Premium = price * (1 - (2 * dependent) / 100);
    }

    if (smoking) {
      packages.Basic = price * 0.8;
    } else {
      packages.Basic = price;
    }

    if (weight < 40) {
      packages.Super = price * 0.96;
    } else if (weight < 100) {
      packages.Super = price * 0.92;
    } else if (weight < 200) {
      packages.Super = price * 0.88;
    } else {
      packages.Super = price * 0.84;
    }

    return packages;
  }

  //   getRentQuote(details) {
  //     return axios.post(USER_API_BASE_URL + "/signin", details);
  //   }
}

export default new Quotation();
