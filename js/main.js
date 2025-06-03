document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');
    // renderBooks()

    // const menuIcon = document.querySelector('.menu-icon');
    // const sidebar = document.getElementById('sidebar');
    // const closeBtn = document.querySelector('.close-btn');
    
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");
    const navItems = navLinks.querySelectorAll("a");

// nav bar
    hamburger.addEventListener("click", function () {
        console.log('clicked')
        navLinks.classList.toggle("show");
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
      });
    
// loop over the menues and find which menu user selected
    navItems.forEach(link => {
        link.addEventListener("click", function () {
          navLinks.classList.remove("show");
          openIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        });
      });
  

    // menuIcon.addEventListener('click', function () {
    //     sidebar.classList.add('show');
    //     content.classList.add('shift');
    // });

    // closeBtn.addEventListener('click', function () {
    //     sidebar.classList.remove('show');
    //     content.classList.remove('shift');
    // });

    // navLinks.forEach(link => {
    //     link.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const page = this.getAttribute('data-page');
    //         loadPage(page);
    //         sidebar.classList.remove('show');
    //         content.classList.remove('shift');
    //     });
    // });
    loadPage('home.html');
    // document.addEventListener("DOMContentLoaded", function () {
      
    //   });
//     const modal = document.getElementById("book-modal");
//   const modalContent = document.querySelector(".modal-content");
//   const closeModalBtn = document.querySelector(".close-modal");

//   if (closeModalBtn) {
//     closeModalBtn.addEventListener("click", () => {
//       modal.classList.add("hidden");
//     });
//   }

// //   Close when clicking outside modal content
//   modal.addEventListener("click", (event) => {
//     if (!modalContent.contains(event.target)) {
//       modal.classList.add("hidden");
//     }
//   });

  

});



// dark/light moode
const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  function updateButtonText(isDark) {
    darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

//   saved mood
  const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        body.classList.add("dark-mode");
        updateButtonText(true);
    } else {
        updateButtonText(false);
    }
// mood toggle
    darkModeToggle.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        updateButtonText(isDark);
      });



// load the books func
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
      .then(response => response.text())
      .then(data => {
        contentDiv.innerHTML = data;

        if (page === 'books.html') {
            initBooksPage();
        }
        if (page === 'home.html') {
            renderBooks(); 
            bindModalEvents();

            
          }
      })
      .catch(error => {
        contentDiv.innerHTML = "<p>Error loading page.</p>";
        console.error("Error loading page:", error);
      });
}


    
// array holding all the books
const books = [
    { 
        title: "Miracle Morning", 
        author: "Hal Elrod", 
        category: "Self Development", 
        image: "assets/images/Miracle Morning.png", 
        pdf:"assets/AF-DHAAB.pdf",
        pdf: "https://drive.google.com/file/d/152GETsYNsYP1w4q_wJFlLEPwLEyeX0Hz/view?usp=sharing" 
    },
    { 
        title: "Atomic Habits", 
        author: "James Clear", 
        category: "Productivity", 
        image: "assets/images/atomic-habits-dots.png", 
        pdf: "https://drive.google.com/file/d/1l05G7meXyjFcTSoby7QLTfqrRWSQCxJx/view?usp=drive_link" 
    },
    { 
        title: "Rich Dad Poor Dad", 
        author: "Robert Kiyosaki", 
        category: "Finance", 
        image: "assets/images/rich-dad-poor-dad2.jpg", 
        pdf: "https://drive.google.com/file/d/1yWbm55vuNe9_XpmsKTMdoEob7_r3f4bu/view?usp=drive_link" 
    },
    { 
        title: "Aanadii Nageeye", 
        author: "Ibraahin Hawd", 
        category: "Sheeko faneed", 
        image: "assets/images/aanadii nageeye.jpg", 
        pdf: "https://drive.google.com/file/d/152GETsYNsYP1w4q_wJFlLEPwLEyeX0Hz/view?usp=drive_link" 
    },
    { 
        title: "AF dhaab", 
        author: "Qoraa: Cismaan CabdiNuur Xaashi", 
        category: "Dhaqan", 
        image: "assets/images/AF-DHAAB.jpg", 
        pdf: "https://drive.google.com/file/d/18FD0Nw-hiiO8G-RCLjgQTEB9xCIQeLQI/view?usp=drive_link" 
    },
    { 
        title: "akhris aayatiin leh", 
        author: "Qoraa: Dr C/Kariim Bakar", 
        category: "Self Development", 
        image: "assets/images/akhris aayatiin leh.jpeg", 
        pdf: "https://drive.google.com/file/d/1bYzIix5TxK-h4Y3s7PMjvCdwXAuEmNFV/view?usp=drive_link" 
    },
    { 
        title: "Dagaalkii Ranjariska", 
        author: "Qoraa: Dr Maxamuud Cabdi Cilmi", 
        category: "Taariikh", 
        image: "assets/images/Dagaalkii Ranjariska.jpg", 
        pdf: "https://drive.google.com/file/d/1huR5PgnH0IhbJwE9mwp97AZU2iF97wJ4/view?usp=drive_link" 
    },
    { 
        title: "Dhambaallada Quraanka", 
        author: "Qoraa: Adham sharqaawi", 
        category: "Diin", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Fy_2-46AEiKFD4PjfeOIqIY9CY7hsIQx3xSTDDDLtbtswaUOYTno1tLKiTzMsb02cVY&usqp=CAU", 
        pdf: "https://drive.google.com/file/d/1ItW5Z40vqForv3jlNV7epcG3Enzbii1P/view?usp=drive_link" 
    },
    { 
        title: "Garbabeel", 
        author: "Qoraa: Jubraan Khaliil jubraan", 
        category: "Sheeko faneed", 
        image: "assets/images/Garbabeel.jpg", 
        pdf: "https://drive.google.com/file/d/1H3-VWpNLaxTxRVctxPNVajuYauE_FuKM/view?usp=drive_link" 
    },
    { 
        title: "KOORA DADAB", 
        author: "Qoraa: Axmed Maxamed Kulumbo", 
        category: "Taariikh", 
        image: "assets/images/KOORA DADAB.jpg", 
        pdf: "https://drive.google.com/file/d/1EP5_QEO4gEP0Ekp52IwX3WK-wysLhKhP/view?usp=drive_link" 
    },
    { 
        title: "Mashruuci-la-dagalanka-nuurka", 
        author: "Qoraa: Cabdiraxmaan Cismaan Jaamac", 
        category: "Ogaal", 
        image: "assets/images/Mashruuci-la-dagalanka-nuurka.jpg", 
        pdf: "https://drive.google.com/file/d/1mNvTrxN0jRDyUiXkAE5BRJV5Cff64jvs/view?usp=drive_link" 
    },
    { 
        title: "Mucjisada-Aroortii", 
        author: "Hal Elrod", 
        category: "Self Development", 
        image: "assets/images/Mucjisada-Aroortii.jpg", 
        pdf: "https://drive.google.com/file/d/1mq7At3PYk3yeN5l9Pdx3ap7GXHi-pK-q/view?usp=drive_link" 
    },
    { 
        title: "Naftaydaay Gacalo", 
        author: "Qoraa: Cula Dayuub", 
        category: "Naf la hadal", 
        image: "assets/images/Naftaydaay Gacalo.jpg", 
        pdf: "https://drive.google.com/file/d/1NXaJUO1yWk8Jte4hyaYzWwKhwYO57Pg6/view?usp=drive_link" 
    },
    { 
        title: "Yaa Qaatay Burcadkaygii", 
        author: "Qoraa:Dr Spencer Johnson", 
        category: "Self Development", 
        image: "assets/images/Yaa_Qaatay_Burcadkaygii.jpg", 
        pdf: "https://drive.google.com/file/d/1Gqqpnsw7TUu0PNYYSwvy_3XQKuFQ_CWT/view?usp=drive_link" 
    },
    { 
        title: "Ismalure", 
        author: "Qoraa:Mark Manson", 
        category: "Naf la hadal", 
        image: "assets/images/Ismalure.jpg", 
        pdf: "https://drive.google.com/file/d/1Hth8M7dBK_KIf17aaJ0NA3FQdzw9OD66/view?usp=drive_link" 
    },
    { 
        title: "Soodoog", 
        author: "Qoraa:Cabdulqaadir C. Diiriye", 
        category: "Sheeko faneed", 
        image: "assets/images/Soodoog.jpg", 
        pdf: "https://drive.google.com/file/d/1bWLB54Z6mUP7viuRPKZC6XD2i6x-WMM4/view?usp=drive_link" 
    }
  
   
];

  

// displaying the books on the DOM
function displayBooks(booksArray) {
    const bookGrid = document.querySelector(".book-grid");
    if (!bookGrid) return;
    bookGrid.innerHTML = "";

    booksArray.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-cover">
            <h3>${book.title}</h3>
            <h4>${book.category}</h4>
            <p>${book.author}</p>
            <div class="book-actions">
                <button class="btn read-btn">Read Online</button>
                <button class="btn download-btn">Download</button>
            </div>
        `;
        bookCard.querySelector(".read-btn").addEventListener("click", () => {
            window.open(book.pdf, "_blank");
        });

        bookCard.querySelector(".download-btn").addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = book.pdf;
            link.download = `${book.title}.pdf`;
            link.click();
        });

        bookGrid.appendChild(bookCard);
    });
}
// search book
function filterBooks(searchTerm) {
    const lowerTerm = searchTerm.toLowerCase().trim();
    return books.filter(book => {
        return [
            book.title.toLowerCase(),
            book.author.toLowerCase(),
            book.category.toLowerCase()
        ].some(field => field.includes(lowerTerm));
    });
}

function initBooksPage() {
    displayBooks(books);
    const searchInput = document.querySelector('#search-input');
    const searchIcon = document.querySelector('.search-icon');

        //kan waxa lasoo bandhigaa only marka search inputka la waayo
    const noResultsMessage = document.querySelector('.no-results-message');

    if (searchInput && searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchInput.classList.toggle('active');
            searchInput.focus();
        });

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);

            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.trim();
                const filteredBooks = filterBooks(searchTerm);

                if (searchTerm && filteredBooks.length === 0) {
                    noResultsMessage.classList.add('visible');
                    noResultsMessage.classList.remove('hidden');
                    document.querySelector('.book-grid').innerHTML = '';
                } else {
                    noResultsMessage.classList.remove('visible');
                    noResultsMessage.classList.add('hidden');
                    displayBooks(filteredBooks);
                }
            }, 3);
        });
    }
}


const mostReadBooks = [
    {
      title: "Aanadii Nageeye",
      author: "Ibraahin Hawd",
      category: "Sheeko faneed",
      image: "assets/images/aanadii nageeye.jpg",
      description:"'Aanadii Nageeye' waa buug ka hadlaya xaaladaha nololeed, dhaqan iyo siyaasad ee bulshada Soomaaliyeed xilligii Jamhuuriyadda. Qoraagu wuxuu si qoto dheer u falanqeeyaa dhacdooyin taariikhi ah isagoo adeegsanaya af-soomaali hodan ah",
      pdf: "https://drive.google.com/file/d/152GETsYNsYP1w4q_wJFlLEPwLEyeX0Hz/view?usp=drive_link" 
    },
    {
      title: "Reach dad poor dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      description: "this book contrasts two approaches to money and investing—one from his educated but financially struggling father, and one from his wealthy mentor. The book emphasizes financial education, asset-building, and thinking differently about wealth",
      image: "assets/images/rich-dad-poor-dad2.jpg",
      pdf: "https://drive.google.com/file/d/1yWbm55vuNe9_XpmsKTMdoEob7_r3f4bu/view?usp=drive_link"
    },
    {
      title: "Dhambaallada Quraanka",
      author: "Adham sharqaawi",
      category: "Diini",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Fy_2-46AEiKFD4PjfeOIqIY9CY7hsIQx3xSTDDDLtbtswaUOYTno1tLKiTzMsb02cVY&usqp=CAU"
    },
    {
      title: "Naftaydaay Gacalo",
      author: "Cula Dayuub",
      category: "Naf la hadal",
      image: "assets/images/Naftaydaay Gacalo.jpg"
    },
    {
      title: "Mucjisada-Aroortii",
      author: "Hal Elrod",
      category: "Self Development",
      image: "assets/images/Mucjisada-Aroortii.jpg"
    },
    {
      title: "Yaa Qaatay Burcadkaygii",
      author: "Dr Spencer Johnson",
      category: "Self Development",
      image: "assets/images/Yaa_Qaatay_Burcadkaygii.jpg"
    }
  ];
function renderBooks() {
    const grid = document.querySelector('#book-grid-mrb');
    if (!grid) {
        console.warn("Could not find #book-grid-mrb");
        return;
    }

    mostReadBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'mrb-grid';
        card.innerHTML = `
            <div class="book-card">
                <img class="book-cover" src="${book.image}" alt="${book.title}">
                <h3>Magaca: ${book.title}</h3>
                <h4>Qoraa: ${book.author}</h4>
                <p>Category: ${book.category}</p>
            </div>
        `;
        card.addEventListener("click", () => {
            openBookModal(book);
          });

        grid.appendChild(card);
     
    });

      
}
function openBookModal(book) {
    const modal = document.getElementById("book-modal");
    document.getElementById("modal-book-image").src = book.image;
    document.getElementById("modal-book-title").textContent = book.title;
    document.getElementById("modal-book-author").textContent = `Author: ${book.author}`;
    document.getElementById("modal-book-category").textContent = `Category: ${book.category}`;
    document.getElementById("modal-book-dec").textContent = `description: ${book.description}`;
  
    const readBtn = document.getElementById("modal-read-btn");
    const downloadBtn = document.getElementById("modal-download-btn");
  
    readBtn.onclick = () => window.open(book.pdf, "_blank");
    downloadBtn.onclick = () => {
      const link = document.createElement("a");
      link.href = book.pdf;
      link.download = `${book.title}.pdf`;
      link.click();
    };
  
    modal.classList.remove("hidden");
  }
//   bind function

  function bindModalEvents() {
    const modal = document.getElementById("book-modal");
    const modalContent = document.querySelector(".modal-content");
    const closeModalBtn = document.querySelector(".close-modal");

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (!modalContent.contains(event.target)) {
                modal.classList.add("hidden");

            }
        });
    }
    
}

  
//   document.querySelector(".close-modal").addEventListener("click", () => {
//     document.getElementById("book-modal").classList.add("hidden");
//   });
  

  
//   document.addEventListener('DOMContentLoaded', renderBooks);
  
// window.onload = () => {
    // loadPage('home.html');
// }  