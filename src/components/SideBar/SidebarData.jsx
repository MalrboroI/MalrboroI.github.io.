import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiOutlineBeaker from "react-icons/hi";
import * as LiaCottonBureau from "react-icons/lia";

export const SidebarData = [
  {
    title: "Уход",
    icon: <HiOutlineBeaker.HiColorSwatch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 1,
        title: "Для лица",
        path: "Уход",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subPage: [
          {
            title: "Маски",
            path: "Маски",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      {
        id: 2,
        title: "Активы",
        path: "Макияж",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Маски",
            path: "Маски",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
    ],
  },
  {
    title: "Декоративная косметика",
    // path: "services",
    icon: <LiaCottonBureau.LiaCottonBureau />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 3,
        title: "Для глаз",
        path: "Макияж",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        id: 4,
        title: "Маски",
        path: "Маски",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Парфюмерия",
    // path: "contact",
    icon: <HiOutlineBeaker.HiOutlineBeaker />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 5,
        title: "Мужской парфюм",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        id: 6,
        title: "Женский парфюм",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        id: 7,
        title: "Унисекс",
        path: "Парфюмерия",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Акции",
    icon: <IoIcons.IoMdPricetag />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        id: 8,
        title: "Со скидкой",
        path: "Макияж",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export const SidebarDataFooter = [
  {
    title: "Поддержка",
    path: "support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
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
