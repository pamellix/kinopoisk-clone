import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import {
	AppBar, Button,
	CssBaseline,
	Divider, Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

const drawerWidth = 240;

const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box sx={{ textAlign: "center" }}>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => {
						navigate("/");
						handleDrawerToggle();
					}} sx={{ textAlign: "center" }}>
						<ListItemText primary="Главная" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => {
						navigate("/favourite-films");
						handleDrawerToggle();
					}} sx={{ textAlign: "center" }}>
						<ListItemText primary="Избранное" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const container = typeof window !== "undefined" ? () => window.document.body : undefined;

	return (
		<Box component="header" sx={{ display: "flex", height: "64px" }}>
			<CssBaseline />
			<AppBar component="nav" sx={{ backgroundColor: "black", boxShadow: "none" }}>
				<Toolbar>
					<IconButton color="inherit" aria-label="открыть меню" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<Button onClick={() => navigate("/")} sx={{ color: "#fff" }}>
							Главная
						</Button>
						<Button onClick={() => navigate("/favourite-films")} sx={{ color: "#fff" }}>
							Избранное
						</Button>
					</Box>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}>
				{drawer}
			</Drawer>
		</Box>);
};

export default Header;