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
                chilLink:"/omzet-luar-negri"
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
            chilLink:"/calon-agen"
        },
        {
            nameChil:"Member",
            chilLink:"/member"
        }

        ]
    },
    {
        name:"Luar Negeri", icon: domestik, children: [
            {
                nameChil:"Transaksi",
                chilLink:"/transaksi"
            },
            {
                nameChil:"Tarif",
                chilLink:"/tarif"
            },
            {
                nameChil:"Booking",
                chilLink:"/booking"
            },
            {
                nameChil:"Request AWB",
                chilLink:"/request-awb"
            },
            {
                nameChil:"Scan Barcode",
                chilLink:"/scan-barcode"
            },
            {
                nameChil:"Tracking",
                chilLink:"/tracking"
            }

        ]
    },
    {name:"Domestik", icon: laporan, children: [
            {
                nameChil:"Transaksi",
                chilLink:"/transaksi-domestik"
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
    {name:"Pengaturan", icon: pengaturan, children: [

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


// export const categories = [
//     {
//         name:"Dashboard", icon: dashboardLogo,children: {
//         chilOne: "Omzet Luar Negeri",
//         chilTwo:"Omzet Domestik",
//         chilThree:"Pengguna Baru",
//         }
//     },
//     {name:"Calon Agen", icon: calonAgen, children: [
//             {
//                 nameChil:"Agen",
//                 linkChil:"/calon-agen"
//             },
//             {
//                 nameChil
//             }
//     ]},
//     {name:"Luar Negeri", icon: domestik, children: {
//         chilOne:"Transaksi",
//         chilTwo:"Tarif",
//         chilThree:"Booking",
//         chilFour:"Request AWB",
//         chilFive:"Scan Barcode",
//         chilSix:"Tracking"
//     }},
//     {name:"Domestik", icon: laporan, children:{
//         chilOne:"Transaksi",
//         chilTwo:"Booking"
//     }},
//     {name:"Keuangan", icon: laporanAgen,},
//     {name:"Laporan", icon: luarNegeri,},
//     {name:"Pengaturan", icon: pengaturan,},
//     {name:"laporan Agen", icon: laporanAgen,},
    
// ]