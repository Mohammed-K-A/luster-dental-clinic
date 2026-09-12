export const clinic = {
  name: "Luster Dental & Facial Aesthetic Clinic",

  dentalPhone: "+918089650707",
  dentalPhoneDisplay: "+91 80896 50707",

  facialPhone: "+917356196707",
  facialPhoneDisplay: "+91 73561 96707",

  dentalWhatsapp: "918891396707",
  facialWhatsapp: "917356196707",

  email: "mylusterdc@gmail.com",

  address:
    "KVM Complex, Valayamkulam, Malappuram, Kerala, 679591",

  enquiryMessage:
    "Hi Luster Dental & Facial Aesthetic Clinic,\n\nI would like to know more about your treatments.",

  instagram: "https://www.instagram.com/luster.clinic",
};


// Primary / general WhatsApp link
export const enquiryWhatsappLink = `https://wa.me/${
  clinic.dentalWhatsapp
}?text=${encodeURIComponent(clinic.enquiryMessage)}`;


// Booking WhatsApp link
export const bookingWhatsappLink = `https://wa.me/${
  clinic.dentalWhatsapp
}?text=${encodeURIComponent(clinic.enquiryMessage)}`;


// Dental WhatsApp link
export const dentalWhatsappLink = `https://wa.me/${
  clinic.dentalWhatsapp
}?text=${encodeURIComponent(clinic.enquiryMessage)}`;


// Facial WhatsApp link
export const facialWhatsappLink = `https://wa.me/${
  clinic.facialWhatsapp
}?text=${encodeURIComponent(clinic.enquiryMessage)}`;