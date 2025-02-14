import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiOutlineBeaker from "react-icons/hi";
import * as LiaCottonBureau from "react-icons/lia";

export const SidebarData = [
  {
    id: 1,
    title: "Уход",
    icon: <HiOutlineBeaker.HiColorSwatch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 2,
        title: "Для лица",
        path: "Уход",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subPage: [
          {
            id: 3,
            title: "Маски",
            path: "Маски",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      {
        id: 4,
        title: "Активы",
        path: "Макияж",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            id: 5,
            title: "Маски",
            path: "Маски",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Декоративная косметика",
    // path: "services",
    icon: <LiaCottonBureau.LiaCottonBureau />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 7,
        title: "Для глаз",
        path: "Макияж",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        id: 8,
        title: "Маски",
        path: "Маски",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    id: 9,
    title: "Парфюмерия",
    // path: "contact",
    icon: <HiOutlineBeaker.HiOutlineBeaker />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 10,
        title: "Мужской парфюм",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        id: 11,
        title: "Женский парфюм",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        id: 12,
        title: "Унисекс",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    id: 13,
    title: "Акции",
    icon: <IoIcons.IoMdPricetag />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 14,
        title: "Со скидкой",
        path: "Макияж",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export const SidebarDataFooter = [
  {
    id: 15,
    title: "Поддержка",
    path: "support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    id: 16,
    title: "Контакты",
    path: "contacts",
    icon: <FaIcons.FaPhone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     id: 9,
    //     title: "Номера телефонов",
    //     path: "contact/num",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     id: 10,
    //     title: "Адрес",
    //     path: "contact/adr",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
];
