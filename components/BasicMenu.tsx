import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useState } from 'react'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/">
            <MenuItem onClick={handleClose}>   
                Home
            </MenuItem>
        </Link>
        <Link href="/shows">
            <MenuItem onClick={handleClose}>   
                Tv Shows
            </MenuItem>
        </Link>
        <Link href="/myList">
            <MenuItem onClick={handleClose}>   
                My List
            </MenuItem>
        </Link>
        <Link href="/account">
            <MenuItem onClick={handleClose}>   
               Account
            </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}