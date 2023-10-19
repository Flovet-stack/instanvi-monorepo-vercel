import { ReactNode } from 'react';
import React, { Fragment, useEffect, useState, useRef } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { styled, keyframes } from "@stitches/react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { violet, mauve, indigo, purple, blackA } from "@radix-ui/colors";
import Router, { useRouter } from "next/router";





type AuthLayoutProps = {
    children: ReactNode;
};

export const AuthLayout = ({
    children,
}: AuthLayoutProps) => {
    return (
        <>
            {/* Header */}
            {children}
            {/* footer */}
        </>
    );
};
