import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ModalTransaction extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
  };

  render() {
    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${this.title}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <img src="" id="imgDetailRecord" class="img-fluid" alt="Evidence of transaction" />
            </div>

            <table>
              <tbody>
                <tr>
                  <td class="fw-bold">Tipe</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="typeDetailRecord"></td>
                </tr>
                <tr>
                  <td class="fw-bold">Nama</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="nameDetailRecord"></td>
                </tr>
                <tr>
                  <td class="fw-bold">Tanggal</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="dateDetailRecord"></td>
                </tr>
                <tr>
                  <td class="fw-bold">Jumlah Uang</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="amountDetailRecord"></td>
                </tr>
                <tr>
                  <td class="fw-bold">Catatan</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="noteDetailRecord"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-transaction', ModalTransaction);
