import dashboardLogo from '../../Image/dashboard-logo.png'
import calonAgen from '../../Image/calon-agen.png'
import domestik from '../../Image/domestik.png'
import laporan from '../../Image/laporan.png'
import laporanAgen from '../../Image/laporan-agen.png'
import luarNegeri from '../../Image/luarnegeri.png'
import pengaturan from '../../Image/pengaturan.png'

export const categories = [
    {name:"Dashboard", icon: dashboardLogo,children: {
        chilOne: "Omzet Luar Negeri",
        chilTwo:"Omzet Domestik",
        chilThree:"Pengguna Baru",
    }},
    {name:"Calon Agen", icon: calonAgen, children: {
        chilOne: {
            nameChil:"Agen",
            link:"/agen"
        },
        chilTwo: {
            nameChil:"Member",
            link:"/member"
        }
    }},
    {name:"Luar Negeri", icon: domestik, children: {
        chilOne:"Transaksi",
        chilTwo:"Tarif",
        chilThree:"Booking",
        chilFour:"Request AWB",
        chilFive:"Scan Barcode",
        chilSix:"Tracking"
    }},
    {name:"Domestik", icon: laporan, children:{
        chilOne:"Transaksi",
        chilTwo:"Booking"
    }},
    {name:"Keuangan", icon: laporanAgen,},
    {name:"Laporan", icon: luarNegeri,},
    {name:"Pengaturan", icon: pengaturan,},
    {name:"laporan Agen", icon: laporanAgen,},
    
]


export const months = [
    "Januari",
    "Febuari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]