import dashboardLogo from '../../Image/dashboard-logo.png'
import calonAgen from '../../Image/calon-agen.png'
import domestik from '../../Image/domestik.png'
import laporan from '../../Image/laporan.png'
import laporanAgen from '../../Image/laporan-agen.png'
import luarNegeri from '../../Image/luarnegeri.png'
import pengaturan from '../../Image/pengaturan.png'


export const categories = [
    {
        name:"Dashboard", icon: dashboardLogo,children: [
            {
                nameChil:"Omzet Luar Negeri",
                chilLink:"/dashboard/omzet-luar-negri"
            },
            {
                nameChil:"Omzet Domestik",
                chilLink:"/omzet-luar-negri"
            },
            {
                nameChil:"Pengguna Baru",
                chilLink:"/omzet-luar-negri"
            }
        ]
    },
    {
        name:"Calon Agen", icon: calonAgen, children: [
        {
            nameChil:"Agen",
            chilLink:"/calon-agen/agen"
        },
        {
            nameChil:"Member",
            chilLink:"/calon-agen/member"
        }

        ]
    },
    {
        name:"Luar Negeri", icon: domestik, children: [
            {
                nameChil:"Transaksi",
                chilLink:"/luar-negeri/transaksi"
            },
            {
                nameChil:"Tarif",
                chilLink:"/luar-negeri/tarif"
            },
            {
                nameChil:"Booking",
                chilLink:"/luar-negeri/booking"
            },
            {
                nameChil:"Request AWB",
                chilLink:"/request-awb"
            },
            {
                nameChil:"Scan Barcode",
                chilLink:"/luar-negeri/scan-barcode"
            },
            {
                nameChil:"Tracking",
                chilLink:"/luar-negeri/tracking"
            }

        ]
    },
    {name:"Domestik", icon: laporan, children: [
            {
                nameChil:"Transaksi",
                chilLink:"/domestik/transaksi-domestik"
            },
            {
                nameChil:"Booking",
                chilLink:"/booking-domestik"
            }
        ]
    },
    {name:"Keuangan", icon: laporanAgen, children: [

        ]
    },
    {name:"Laporan", icon: luarNegeri, children: [

        ]
    },
    {name:"Pengaturan", icon: pengaturan, link: '/pengaturan',children: [
            {
                nameChil:"Master Data",
                chilLink:"/pengaturan/master-data"
            },
            {
                nameChil:"Office Parameter",
                chilLink:"/pengaturan/office-parameter"
            },
            {
                nameChil:"Pengaturan System",
                chilLink:"/pengaturan/pengaturan-system"
            }
        ]
    },
    {name:"laporan Agen", icon: laporanAgen, children: [

        ]
    }

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

export const HeaderMasterData = [
    {
        title:'Tarif',
        children: [
            {
                nameChil:'Tarif Umum',
                chilLink:'/pengaturan/master-data/tarif/tarif-umum'
            },
            {
                nameChil:'Tarif Agen',
                chilLink:'/pengaturan/master-data/tarif/tarif-agen'
            },
            {
                nameChil:'Tarif VIP Customer',
                chilLink:'/pengaturan/master-data/tarif/tarif-vip-customer'
            },
        ]
    },
    {
        title:'Mitra Expedisi'
    },
    {
        title:'Data Pengguna'
    },
    {
        title:'Akun Bank Pembayaran'
    },
    {
        title:'Data Pengguna'
    },
    {
        title:'Akun Bank Pembayaran'
    },
    {
        title:'Data Pengguna'
    },
    {
        title:'Akun Bank Pembayaran'
    },
]

export const HeaderOfficeParameter = [
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kemitraan',
        children: [
            {
                nameChil:'Daftar Agen',
                chilLink:'/pengaturan/master-data/tarif/tarif-umum'
            },
            {
                nameChil:'Daftar VIP Customer',
                chilLink:'/pengaturan/master-data/tarif/tarif-agen'
            },
            {
                nameChil:'Daftar Affiliate',
                chilLink:'/pengaturan/master-data/tarif/tarif-vip-customer'
            },
            {
                nameChil:'Daftar Drop Point',
                chilLink:'/pengaturan/master-data/tarif/tarif-vip-customer'
            },
        ]
    }
]
export const HeaderPengaturanSystems = [
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
    {
        title:'Kantor Cabang',
    },
]