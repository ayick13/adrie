// faq.js - FAQ Section for Rasyifa Nusantara Group
document.addEventListener('DOMContentLoaded', function() {
    const faqData = [
        {
            question: "Apa saja layanan utama yang ditawarkan Rasyifa Nusantara Group?",
            answer: "Kami menyediakan layanan terintegrasi di empat sektor utama: Jasa Profesional (konsultasi bisnis, manajemen proyek), Pertanian Modern (smart farming), Peternakan Terpadu, dan Industri Pengolahan hasil pertanian/peternakan."
        },
        {
            question: "Bagaimana cara memulai kerja sama dengan Rasyifa Nusantara Group?",
            answer: "Anda dapat menghubungi kami melalui formulir kontak di website, WhatsApp, atau telepon kantor kami. Tim kami akan menjadwalkan pertemuan untuk memahami kebutuhan Anda dan menawarkan solusi yang paling sesuai."
        },
        {
            question: "Apakah Rasyifa Nusantara Group melayani proyek di seluruh Indonesia?",
            answer: "Ya, kami melayani klien di seluruh wilayah Indonesia. Untuk proyek di luar Jawa, kami memiliki tim yang siap melakukan survey lokasi dan koordinasi dengan mitra lokal."
        },
        {
            question: "Bagaimana dengan jaminan kualitas produk dan layanan?",
            answer: "Kami menerapkan sistem manajemen mutu yang ketat di semua unit bisnis. Untuk produk pertanian dan peternakan, kami memiliki sertifikasi organik dan halal. Untuk layanan jasa, kami memberikan garansi penyelesaian proyek sesuai kesepakatan."
        },
        {
            question: "Apakah menyediakan pelatihan untuk petani/peternak pemula?",
            answer: "Ya, kami memiliki program pelatihan reguler dan custom untuk petani/peternak pemula maupun yang ingin mengadopsi teknologi modern. Materi mencakup teknik budidaya, manajemen usaha, hingga pemasaran."
        },
        {
            question: "Bagaimana sistem pembayaran untuk layanan konsultasi?",
            answer: "Kami menawarkan beberapa opsi: pembayaran penuh di depan untuk proyek kecil, termin berdasarkan milestone untuk proyek menengah-besar, atau model retainer untuk kerja sama jangka panjang. Detail akan dibahas dalam perjanjian kerja sama."
        }
    ];

    const faqAccordion = document.getElementById('faqAccordion');
    
    if (faqAccordion) {
        faqData.forEach((item, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item border-0 shadow-sm mb-3';
            accordionItem.innerHTML = `
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        ${item.question}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${item.answer}
                    </div>
                </div>
            `;
            faqAccordion.appendChild(accordionItem);
        });
    }
});
