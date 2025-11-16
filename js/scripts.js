// scripts.js
// File ini disiapkan untuk interaktivitas dasar jika diperlukan

console.log("MarketHub loaded successfully!");

// Contoh fitur sederhana: validasi form dasar
const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit", function(e) {
        const inputs = this.querySelectorAll("input, textarea");
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #ccc";
            }
        });
        if (!valid) {
            e.preventDefault();
            alert("Harap isi semua field.");
        }
    });
});