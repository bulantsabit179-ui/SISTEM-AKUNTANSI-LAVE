function openModal(id) {
  document.getElementById(id)?.classList.add('show')
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('show')
}

function confirmDelete(m = 'Hapus data ini?') {
  return confirm(m)
}

function formatDate(v) {
  return v ? new Date(v).toLocaleDateString('id-ID') : '-'
}

async function bootPage() {
  const p = document.body.dataset.page
  const flowStyles = document.createElement('link')
  flowStyles.rel = 'stylesheet'
  flowStyles.href = '../css/variant-flow.css'
  document.head.append(flowStyles)

  document.querySelectorAll('.nav a').forEach(a => {
    if (a.dataset.page === p) a.classList.add('active')
  })

  document.querySelectorAll('.nav a[data-page="pembayaran"], .nav a[data-page="kas-masuk"], .nav a[data-page="kas-keluar"]').forEach(el => el.remove())

  const nav = document.querySelector('.nav')

  if (nav && !nav.querySelector('[data-page="settings"]')) {
    const title = document.createElement('div')
    title.className = 'nav-title'
    title.textContent = 'Pengaturan'

    const link = document.createElement('a')
    link.href = 'settings.html'
    link.dataset.page = 'settings'
    link.textContent = 'Settings'

    nav.append(title, link)
    if (p === 'settings') link.classList.add('active')
  }

  if (nav && !nav.querySelector('[data-page="modal-pemilik"]')) {
    const link = document.createElement('a')
    link.href = 'modal-pemilik.html'
    link.dataset.page = 'modal-pemilik'
    link.textContent = 'Modal Pemilik'

    const existingFinanceTitle = Array.from(nav.querySelectorAll('.nav-title')).find(item =>
      ['persediaan & keuangan', 'keuangan'].includes(item.textContent.trim().toLowerCase())
    )
    const firstFinanceLink = nav.querySelector('a[href="pembelian.html"], a[data-page="pembelian"]')

    if (existingFinanceTitle && firstFinanceLink) {
      nav.insertBefore(link, firstFinanceLink)
    } else if (firstFinanceLink) {
      const title = document.createElement('div')
      title.className = 'nav-title'
      title.textContent = 'Keuangan'
      nav.insertBefore(title, firstFinanceLink)
      nav.insertBefore(link, firstFinanceLink)
    } else {
      nav.append(link)
    }

    if (p === 'modal-pemilik') link.classList.add('active')
  }

  if (nav) {
    const navTitles = Array.from(nav.querySelectorAll('.nav-title'))
    const financeTitle = navTitles.find(item =>
      ['persediaan & keuangan', 'keuangan'].includes(item.textContent.trim().toLowerCase())
    ) || (() => {
      const item = document.createElement('div')
      item.className = 'nav-title'
      nav.appendChild(item)
      return item
    })()

    financeTitle.textContent = 'Keuangan'

    const labels = {
      penyewaan: '◇ Penyewaan',
      pengembalian: '↩ Pengembalian',
      denda: '! Denda',
      'modal-pemilik': 'Modal Pemilik',
      pembelian: '＋ Pembelian',
      persediaan: '▥ Persediaan',
      utang: '≡ Utang',
      'biaya-operasional': '◌ Biaya Operasional'
    }

    const findNavLink = pageName =>
      nav.querySelector(`a[data-page="${pageName}"], a[href="${pageName}.html"]`)

    Object.entries(labels).forEach(([pageName, label]) => {
      const link = findNavLink(pageName)
      if (link) link.textContent = label
    })

    const rentalLabels = {
      penyewaan: '◇ Penyewaan',
      pengembalian: '↩ Pengembalian',
      denda: '! Denda'
    }

    let rentalTitle = Array.from(nav.querySelectorAll('.nav-title')).find(
      item => item.textContent.trim().toLowerCase() === 'penyewaan'
    )

    if (!rentalTitle) {
      rentalTitle = document.createElement('div')
      rentalTitle.className = 'nav-title'
      rentalTitle.textContent = 'Penyewaan'
      nav.insertBefore(rentalTitle, financeTitle)
    }

    const rentalLinks = Object.entries(rentalLabels).map(([pageName, label]) => {
      let link = findNavLink(pageName)

      if (!link) {
        link = document.createElement('a')
        link.href = `${pageName}.html`
        link.dataset.page = pageName
      }

      link.textContent = label
      return link
    })

    rentalTitle.after(...rentalLinks)

    const orderedFinanceLinks = [
      'modal-pemilik',
      'pembelian',
      'persediaan',
      'utang',
      'biaya-operasional'
    ].map(findNavLink).filter(Boolean)

    financeTitle.after(...orderedFinanceLinks)
  }

  const target = document.getElementById('currentUser') || document.querySelector('.topbar > .muted')
  if (target) target.textContent = 'Akses publik'

  if (
    ['pembelian', 'utang', 'biaya-operasional', 'buku-besar', 'neraca-saldo'].includes(p) &&
    !document.querySelector('script[src*="integrated-flow.js"]')
  ) {
    const integratedScript = document.createElement('script')
    integratedScript.src = '../js/integrated-flow.js'
    document.body.appendChild(integratedScript)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    () => bootPage().catch(error =>
      window.lave.handleSupabaseError(error, {module: 'App', operation: 'INIT'})
    ),
    {once: true}
  )
} else {
  bootPage().catch(error =>
    window.lave.handleSupabaseError(error, {module: 'App', operation: 'INIT'})
  )
}