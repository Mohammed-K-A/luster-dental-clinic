export const clinic = {
  name: "Luster Dental & Facial Aesthetic Clinic",

  phone: "+917356196707",

  whatsapp: "918891396707",

  email: "mylusterdc@gmail.com", // Change later if needed

  address:
    "KVM Complex, Valayamkulam, Malappuram, Kerala, 679591",

  bookingMessage:
    "Hi Luster Dental & Facial Aesthetic Clinic,\n\nI would like to book a consultation.\n\nPlease let me know the available appointment slots.\n\nThank you.",

  enquiryMessage:
    "Hi Luster Dental & Facial Aesthetic Clinic,\n\nI would like to know more about your treatments.",

  instagram: "https://www.instagram.com/luster.clinic",
};

export const bookingWhatsappLink = `https://wa.me/${
  clinic.whatsapp
}?text=${encodeURIComponent(clinic.bookingMessage)}`;

export const enquiryWhatsappLink = `https://wa.me/${
  clinic.whatsapp
}?text=${encodeURIComponent(clinic.enquiryMessage)}`;