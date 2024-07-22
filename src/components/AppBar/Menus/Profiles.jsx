import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt='anh dai dien'
            src='data:image/jpeg;base64,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'
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
