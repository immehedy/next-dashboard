import {
    HiChartPie,
    HiViewBoards,
    HiInbox,
    HiUser,
    HiShoppingBag,
    HiArrowSmRight,
    HiTable,
  } from "react-icons/hi";

export const options = [
    {
        name: 'Dashboard',
        icon: HiChartPie,
        route: '/'
    },
    {
        name: 'Products',
        icon: HiViewBoards,
        route: '/products'
    },
    {
        name: 'Supliers',
        icon: HiUser,
        route: '/suppliers'
    },
    {
        name: 'Orders',
        icon: HiShoppingBag,
        route: '/orders'
    },
    {
        name: 'Inbox',
        icon: HiInbox,
        route: '/inbox'
    },
    {
        name: 'Coupons',
        icon:  HiArrowSmRight,
        route: '/coupons'
    },
]