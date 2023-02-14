const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._userTransactionsHistory = responseRecords.results.transactionsHistory;
    this._populateTransactionsRecordToTable(this._userTransactionsHistory);
    this._populateTransactionsDataToCard(this._userTransactionsHistory);
  },

  _initialListener() {
    const recordDetailModal = document.getElementById('recordDetailModal');
    recordDetailModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = recordDetailModal.querySelector('.modal-title');
      modalTitle.focus();

      const button = event.relatedTarget;
      const dataRecord = this._userTransactionsHistory.find((item) => {
        return item.id == button.dataset.recordId;
      });

      this._populateDetailTransactionToModal(dataRecord);
    });
  },

  _populateTransactionsDataToCard(transactionsHistory = null) {
    if (!(typeof transactionsHistory === 'object')) {
      throw new Error(
        `Parameter transactionsHistory should be an object. The value is ${transactionsHistory}`,
      );
    }

    if (!Array.isArray(transactionsHistory)) {
      throw new Error(
        `Parameter transactionsHistory should be an array. The value is ${transactionsHistory}`,
      );
    }

    let amountIncome = 0;
    let amountExpense = 0;

    transactionsHistory.forEach((item) => {
      if (item.type === 'income') {
        amountIncome += item.amount;
      } else if (item.type === 'expense') {
        amountExpense += item.amount;
      }
    });
    
    document
      .querySelector('#transactions-card')
      .setAttribute('content', `${transactionsHistory.length} Transaksi`);
    document.querySelector('#income-card').setAttribute('content', `Rp ${amountIncome}`);
    document.querySelector('#expense-card').setAttribute('content', `Rp ${amountExpense}`);
  },

  _populateTransactionsRecordToTable(transactionsHistory = null) {
    if (!(typeof transactionsHistory === 'object')) {
      throw new Error(
        `Parameter transactionsHistory should be an object. The value is ${transactionsHistory}`,
      );
    }

    if (!Array.isArray(transactionsHistory)) {
      throw new Error(
        `Parameter transactionsHistory should be an array. The value is ${transactionsHistory}`,
      );
    }

    const recordBodyTable = document.querySelector('#recordsTable tbody');

    recordBodyTable.innerHTML = '';
    if (transactionsHistory.length <= 0) {
      recordBodyTable.innerHTML = this._templateEmptyBodyTable();
      return;
    }

    transactionsHistory.forEach((item, idx) => {
      recordBodyTable.innerHTML += this._templateBodyTable(idx, transactionsHistory[idx]);
    });
  },

  _populateDetailTransactionToModal(transactionRecord) {
    if (!(typeof transactionRecord === 'object')) {
      throw new Error(
        `Parameter transactionRecord should be an object. The value is ${transactionRecord}`,
      );
    }

    const imgDetailRecord = document.querySelector('#recordDetailModal #imgDetailRecord');
    const typeDetailRecord = document.querySelector('#recordDetailModal #typeDetailRecord');
    const nameDetailRecord = document.querySelector('#recordDetailModal #nameDetailRecord');
    const dateDetailRecord = document.querySelector('#recordDetailModal #dateDetailRecord');
    const amountDetailRecord = document.querySelector('#recordDetailModal #amountDetailRecord');
    const descriptionDetailRecord = document.querySelector('#recordDetailModal #noteDetailRecord');

    imgDetailRecord.setAttribute('src', transactionRecord.evidenceUrl);
    imgDetailRecord.setAttribute('alt', transactionRecord.name);
    typeDetailRecord.textContent =
      transactionRecord.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
    nameDetailRecord.textContent = transactionRecord.name;
    dateDetailRecord.textContent = transactionRecord.date;
    amountDetailRecord.textContent = transactionRecord.amount;
    descriptionDetailRecord.textContent = transactionRecord.description || '-';
  },

  _templateBodyTable(index, transactionRecord) {
    return `
      <tr>
        <th class="text-center">${parseInt(index, 10) + 1}</th>
        <td>${transactionRecord.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}</td>
        <td>${transactionRecord.name}</td>
        <td>${transactionRecord.amount}</td>
        <td>${transactionRecord.date}</td>
        <td>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <a class="btn btn-sm btn-primary" href="#"
               data-bs-toggle="modal" data-bs-target="#recordDetailModal" 
               data-record-id="${transactionRecord.id}">
              <i class="bi bi-eye-fill me-1"></i>Show
            </a>
            <a class="btn btn-sm btn-warning" href="/transactions/edit.html?id=${
              transactionRecord.id
            }">
              <i class="bi bi-pen-fill me-1"></i>Edit
            </a>
            <a class="btn btn-sm btn-danger" href="#">
              <i class="bi bi-trash3-fill me-1"></i>Delete
            </a>
          </div>
        </td>
      </tr>
    `;
  },

  _templateEmptyBodyTable() {
    const recordHeadTable = document.querySelector('#recordsTable thead');

    return `
      <tr>
        <td colspan="${recordHeadTable.querySelectorAll('td,th').length}">
          <div class="text-center">Tidak ada catatan transaksi</div>
        </td>
      </tr>
    `;
  },
};

export default Dashboard;
