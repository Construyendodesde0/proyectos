document.addEventListener('DOMContentLoaded', function () {

// Control del panel de emprendedores
        const btnEmprendedor = document.getElementById('btnEmprendedor');
        const panelEmprendedor = document.getElementById('panelEmprendedor');
        const cerrarPanel = document.getElementById('cerrarPanel');
        const btnMostrarQR = document.getElementById('btnMostrarQR');
        const cryptoSection = document.getElementById('cryptoSection');

        btnEmprendedor.addEventListener('click', () => {
            panelEmprendedor.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        cerrarPanel.addEventListener('click', () => {
            panelEmprendedor.style.display = 'none';
            cryptoSection.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        btnMostrarQR.addEventListener('click', () => {
            cryptoSection.style.display = cryptoSection.style.display === 'block' ? 'none' : 'block';
        });
    });

    const btnMbway = document.getElementById('btnMbway');
const mbwaySection = document.getElementById('mbwaySection');

btnMbway.addEventListener('click', () => {
    mbwaySection.style.display = mbwaySection.style.display === 'block' ? 'none' : 'block';
});