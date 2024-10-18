//menu
const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navigation.classList.toggle("active")
});
//sticky
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200);
});

        var contributors = [
            { username: 'Team BabyCate', transaction: '', address: '', amount: '$25,000' },
            { username: '@bravosdev', transaction: '0x4a31e561045708464fe47c63d8a596927b1a461c6c9edb4df7a2ee5211905add', address: '0xe2fc31F816A9b94326492132018C3aEcC4a93aE1', amount: '200 USDT' },
            { username: '@SoHotz305', transaction: '0x922e69b6fea0c94008f212011124c5335e88161cc560595e637d5468c5fdcfa9', address: '0xe2fc31F816A9b94326492132018C3aEcC4a93aE1', amount: '100 USDT' },
            { username: '@duke56789', transaction: '0x5bad7e767a590b6fd4a71d16d12c776bbc42bbd015911a41c9172f55d43d3ce8', address: '0x161bA15A5f335c9f06BB5BbB0A9cE14076FBb645', amount: '0.1 BNB' },
            { username: '@Shi_xuka', transaction: '0x54c781a6e5da8bee607f358343b6faa5623acdc9b99f0af7a66a71982d9e1bf2', address: '0xa180Fe01B906A1bE37BE6c534a3300785b20d947', amount: '0.1 BNB' },
            { username: '@Hyuga12345', transaction: '0x81e9c1ea91bb64147c412a5d5f7b4beab28f541ff0f7c1d7a9e232418bae9719', address: '0x01C952174C24E1210d26961D456A77A39e1F0BB0', amount: '0.1 BNB' },
            { username: '@MrTstrong', transaction: '0x0f83fe1c8fb4978377e0d3bde6d897d894fda6dd1639c0ea210dc738e1ebb18d', address: '0x97b9D2102A9a65A26E1EE82D59e42d1B73B68689', amount: '0.126 BNB' },
            { username: '@whaleai1st', transaction: '0xc275194f4ceb45df78a9b40e8ab0cc7e5e09b31c7ba38f3aad7e9c45c566fa15', address: '0x161bA15A5f335c9f06BB5BbB0A9cE14076FBb645', amount: '1075 USDT' },
            { username: '@kendy071090', transaction: '', address: '', amount: '200 USDT' },
            { username: '@Henrick_OG', transaction: '0x8c058e49de35b069dc85e13928b44c36c5688e48c8bdcc4cb40cb7d6aeb6bb4d', address: '0x487DF73090dBf7E94703AeF66A7Bf20B831Ae55f', amount: '0.1 BNB' },
            { username: '@Mild1253', transaction: '0xa03cb8d448a3a7acbbb68c87284cb28b4c31db5232233f5643ec9efe6e706d7a', address: '0xa180Fe01B906A1bE37BE6c534a3300785b20d947', amount: '50 USDT' },
            { username: '@Nguyen_Nguyen91', transaction: '0xd076e84eb55f00f15307acd8c6a67588a2b7556ba9cc79d9de3e4e5fe3926f13', address: '0x4982085C9e2F89F2eCb8131Eca71aFAD896e89CB', amount: '50 USDT' },
            { username: '@DOREMON_142857', transaction: '0xc31d0716a2ef5e47d858ae0228fd3a988940804845c64ad2085f2f51505ca1c1', address: '0x3c783c21a0383057D128bae431894a5C19F9Cf06', amount: '0.13 BNB' },
            { username: '@duke56789', transaction: '0x945b4ab6e047dbd10ab714c828ca6d62c07eecede61285c69ac89d2917a6cefd', address: '0xe2fc31F816A9b94326492132018C3aEcC4a93aE1', amount: '0.11 BNB' },
            { username: '@SoHotz305', transaction: '0xc6476abc42d85d8083c1e11215a04f0c4808615c9ec6cbab082c86595f87165f', address: '0xe2fc31F816A9b94326492132018C3aEcC4a93aE1', amount: '0.1 BNB' },
            { username: '@mina1208', transaction: '0x469e8b451e10ce7322ba1e9908124ee4df879aefad0bf561c7a12e345755ce4e', address: '0xa180Fe01B906A1bE37BE6c534a3300785b20d947', amount: '100 USDT' },
            { username: '@home69n', transaction: '0xa3313eda18cb7f7622f5000374c27d1b262f0546baa48d4b84cc3c6f5a861e12', address: '0x8894E0a0c962CB723c1976a4421c95949bE2D4E3', amount: '100 USDT' },
            { username: '@Shi_xuka', transaction: '0x9c2eeef3ba946758fed63b43103e03c7ce4715144dc821f3b061b52950c0d040', address: '0x1FBe2AcEe135D991592f167Ac371f3DD893A508B', amount: '0.1 BNB' },
            { username: '@MrTstrong', transaction: '0x65cd0f69734fdfc5307ff0c4e2dee209a1448a61826aad2e2c1064d941f0415e', address: '0x161bA15A5f335c9f06BB5BbB0A9cE14076FBb645', amount: '0.03 BNB' },
        ];


        var currentPage = 1;
        var pageSize = 10;
        var totalPages = Math.ceil(contributors.length / pageSize);

        function displayTable(page) {
            var start = (page - 1) * pageSize;
            var end = start + pageSize;
            var table = document.getElementById('contributeTable');

            table.innerHTML = '';

            var header = table.createTHead();
            var headerRow = header.insertRow(0);
            headerRow.insertCell(0).outerHTML = "<th style='width: 15%;'>Username</th>";
            headerRow.insertCell(1).outerHTML = "<th style='width: 35%;'>Transaction</th>";
            headerRow.insertCell(2).outerHTML = "<th style='width: 35%;'>Address</th>";
            headerRow.insertCell(3).outerHTML = "<th style='width: 15%;'>Amount</th>"; 

            var tbody = document.createElement('tbody');

            contributors.slice(start, end).forEach(function(contributor) {
                var row = tbody.insertRow();
                row.insertCell(0).innerText = contributor.username;

                var txLink = document.createElement('a');
                txLink.href = 'https://bscscan.com/tx/' + contributor.transaction; 
                txLink.target = '_blank'; 
                txLink.innerText = contributor.transaction;
                txLink.classList.add('tx-link'); 
                var txCell = row.insertCell(1);
                txCell.appendChild(txLink);
                txCell.classList.add('truncate'); 

                var addressLink = document.createElement('a');
                addressLink.href = 'https://bscscan.com/address/' + contributor.address; 
                addressLink.target = '_blank'; 
                addressLink.innerText = contributor.address;
                addressLink.classList.add('tx-link'); 
                var addressCell = row.insertCell(2);
                addressCell.appendChild(addressLink);
                addressCell.classList.add('truncate'); 

                row.insertCell(3).innerText = contributor.amount;
                row.cells[3].classList.add('align'); 
            });
            table.appendChild(tbody);

            updateCurrentPageDisplay();
        }

        function updateCurrentPageDisplay() {
            var currentPageDisplay = document.getElementById('currentPageDisplay');
            currentPageDisplay.innerText = 'Page ' + currentPage + ' of ' + totalPages;
        }

        function firstPage() {
            currentPage = 1;
            displayTable(currentPage);
        }

        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                displayTable(currentPage);
            }
        }

        function nextPage() {
            if (currentPage < totalPages) {
                currentPage++;
                displayTable(currentPage);
            }
        }

        function lastPage() {
            currentPage = totalPages;
            displayTable(currentPage);
        }

        // Initial display
        displayTable(currentPage);