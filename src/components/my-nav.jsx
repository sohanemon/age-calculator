import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function MyNav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-semibold hover:underline underline-offset-2 decoration-2'
      >
        <a href='#' className='flex items-center'>
          Age Calculator
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-semibold hover:underline underline-offset-2 decoration-2'
      >
        <a href='#' className='flex items-center'>
          Weight Convertor
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-semibold hover:underline underline-offset-2 decoration-2'
      >
        <a href='#' className='flex items-center'>
          Currency Calculator
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-semibold hover:underline underline-offset-2 decoration-2'
      >
        <a href='#' className='flex items-center'>
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-2'>
      <div className='container mx-auto flex items-center justify-between text-gray-800 '>
        <Typography
          as='a'
          href='#'
          variant='small'
          className='mr-4 cursor-pointer text-primary text-xl py-1.5 font-bold'
        >
          <span>Calculator</span>
        </Typography>
        <div className='hidden lg:block '>{navList}</div>
        <Button
          variant='gradient'
          size='sm'
          className='hidden  from-primary to-pink-400 lg:inline-block'
        >
          <span>Start Now</span>
        </Button>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-primary'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav className='text-gray-800' open={openNav}>
        {navList}
        <Button
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2 from-primary to-pink-400 '
        >
          <span>Start Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
