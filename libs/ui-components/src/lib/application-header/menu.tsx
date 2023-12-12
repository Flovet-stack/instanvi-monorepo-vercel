'use client';

import React, { useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { styled, keyframes } from '@stitches/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { violet } from '@radix-ui/colors';
// import { useRouter } from 'next/router';

interface MenuLayoutProps {
  children: React.ReactNode;
}

const enterFromRight = keyframes({
  from: { transform: 'translateX(150)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: 'auto',
  zIndex: 1,
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
});

const itemStyles = {
  padding: '8px 16px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: 'black',
  '&:focus': { position: 'relative' },
  '&:hover': { backgroundColor: '#E7F7EF', cursor: 'pointer' },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: violet.violet10,
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }: MenuLayoutProps, forwardedRef) => (
    <StyledTrigger className="bg-green-100" {...props}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '70%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'visible',
  zIndex: 1,
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props}>
    <StyledArrow />
    <ViewportPosition>
      <NavigationMenuViewport />
    </ViewportPosition>
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 2,
  marginLeft: 150,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow:
    ' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  borderBottom: '3px solid green',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

// Your app...

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: 'var(--radix-navigation-menu-viewport-width)',
  top: 0,
  left: 0,
  transform: 'translateX(-50%)',
  perspective: '2000px',
});

export default function Example() {
  //   const { asPath } = useRouter();
  const [bgColor] = useState<string>('');

  //   useEffect(() => {
  //     if (!localStorage.getItem('amoutHide'))
  //       localStorage.setItem('amoutHide', 'false');
  //     // const str = asPath;
  //     // const res = str.split('/');
  //     // setBgColor(res[2]);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  // calculating the height of the header
  const elementRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     console.log(elementRef.current?.clientHeight);
  //     localStorage.setItem(
  //       'headerHeight',
  //       String(elementRef.current?.clientHeight)
  //     );
  //   }, []);

  return (
    <div ref={elementRef} className="body oveflow-y-none">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

      <div className="mx-auto bg-white max-w-8xl   px-4 sm:px-12 lg:px-12">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem
              className={`${bgColor == 'Campaigns' ? 'bg-green-100' : ''}`}
            >
              <NavigationMenuLink href="/publisher/Campaign">
                <p className="text-lg">Home</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
              // className={`${bgColor == 'Audience' ? 'bg-green-100' : ''}`}
              >
                <p className="text-lg">Audience</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-2 border-green-400 mt-5">
                <div className="w-32 mx-3  h-32">
                  <div>
                    <a href="/publisher/persona">Persona</a>
                  </div>
                  <div className="my-3">
                    <a href="/publisher/Contacts">List</a>
                  </div>
                  <div className="">
                    <a href="/publisher/contactsList">Contact</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
              // className={`${bgColor == 'Publish' ? 'bg-green-100' : ''}`}
              >
                <p className="text-lg">Publish</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-2 border-green-400 mt-5">
                <div className="w-32 mx-3  h-24">
                  <div>
                    <a href="/publisher/Campaign">Campaign</a>
                  </div>
                  <div className="my-3">
                    <a href="/publisher/personal">Publisher</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
              // className={`${bgColor == 'Messagings' ? 'bg-green-100' : ''}`}
              >
                <p className="text-lg">Messagings</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-2 border-green-400 mt-5">
                <div className="w-32 mx-3  h-24">
                  <div>
                    <a href="/publisher/people">People</a>
                  </div>
                  <div className="my-3">
                    <a href="/publisher/Broadcast">BroadCast</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${bgColor == 'fileManager' ? 'bg-green-100' : ''}`}
                href="/publisher/fileManager"
              >
                <p className="text-lg">Creative</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${bgColor == 'calender' ? 'bg-green-100' : ''}`}
                href="/publisher/calender"
              >
                <p className="text-lg">Calender</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${bgColor == 'leads' ? 'bg-green-100' : ''}`}
              >
                <Link href={'/publisher/leads'} prefetch={true}>
                  <p className="text-lg">Leads</p>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
              // className={`${bgColor == 'tools' ? 'bg-green-100' : ''}`}
              >
                <p className="text-lg">Tools</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="shadow mt-5">
                <div className="w-32 mx-3 pt-2 shadow-sm h-56">
                  <div className="-mt-3">
                    <a href="/publisher/tools/ussd">USSD</a>
                  </div>
                  <div className="my-3.5">
                    <a href="/publisher/tools/form">Forms</a>
                  </div>
                  <div>
                    <a href="/publisher/tools/telephony">Voice</a>
                  </div>
                  <div className="my-3.5">
                    <a href="/publisher/tools/links">Links</a>
                  </div>
                  <div className="my-3">
                    <a href="/publisher/tools/qrCodes/">QR Codes</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
              // className={`${bgColor == 'Data' ? 'bg-green-100' : ''}`}
              >
                <p className="text-lg">Data</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-2 shadow-sm border-green-400 mt-5">
                <div className="w-32 mx-3  h-24">
                  <div className="mb-3">
                    <a href="/publisher/Marketplace">Marketplace</a>
                  </div>
                  <div className="mb-2">
                    <a href="/publisher/Surveys">Surveys</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${bgColor == "Insight" ? "bg-green-100" : ""}`}
              >
                <p className="text-lg">Insight</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-2 border-green-400 mt-5">
                <div className="w-32 mx-3  h-48">
                  <div>
                    <a href="">USSD</a>
                  </div>
                  <div className="my-3">
                    <a href="">Forms</a>
                  </div>
                  <div>
                    <a href="">Voice</a>
                  </div>
                  <div className="my-3">
                    <a href="">Links</a>
                  </div>
                  <div>
                    <a href="">QR Codes</a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${bgColor == 'settings' ? 'bg-green-100' : ''}`}
                href="/publisher/settings"
              >
                <p className="text-lg">Settings</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
