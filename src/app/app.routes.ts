import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './components/layout/layout';
// import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: '',
        component: Layout,
        // canActivate: [authGuard], // Descomentar cuando el guard esté listo
        children: [
            // Rutas de Socio
            { path: 'home', component: Home },
            { path: 'dashboard', component: Dashboard },
            { path: 'membresias', loadComponent: () => import('./pages/membresias/membresias').then(m => m.Membresias) },
            { path: 'asistencias', loadComponent: () => import('./pages/asistencias/asistencias').then(m => m.Asistencias) },
            { path: 'tienda', loadComponent: () => import('./pages/tienda/tienda').then(m => m.Tienda) },
            { path: 'fitness', loadComponent: () => import('./pages/fitness/fitness').then(m => m.Fitness) },
            { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil) },

            // Rutas de Coach
            { path: 'coach/dashboard', loadComponent: () => import('./pages/coach/dashboard-coach/dashboard-coach').then(m => m.DashboardCoach) },
            { path: 'coach/multimedia', loadComponent: () => import('./pages/coach/gestion-multimedia/gestion-multimedia').then(m => m.GestionMultimedia) },

            // Rutas de Admin
            { path: 'admin/dashboard', loadComponent: () => import('./pages/admin/dashboard-admin/dashboard-admin').then(m => m.DashboardAdmin) },
            { path: 'admin/usuarios', loadComponent: () => import('./pages/admin/usuarios/usuarios').then(m => m.Usuarios) },
            { path: 'admin/membresias', loadComponent: () => import('./pages/admin/membresias-admin/membresias-admin').then(m => m.MembresiasAdmin) },
            { path: 'admin/sedes', loadComponent: () => import('./pages/admin/sedes/sedes').then(m => m.Sedes) },
            { path: 'admin/inventario', loadComponent: () => import('./pages/admin/inventario-admin/inventario-admin').then(m => m.InventarioAdmin) },
            { path: 'admin/ventas', loadComponent: () => import('./pages/admin/ventas-admin/ventas-admin').then(m => m.VentasAdmin) },
            { path: 'admin/reportes', loadComponent: () => import('./pages/admin/reportes-admin/reportes-admin').then(m => m.ReportesAdmin) }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
