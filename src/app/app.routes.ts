import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/socio/dashboard/dashboard';
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
            { path: 'socio/dashboard', component: Dashboard },
            { path: 'socio/membresias', loadComponent: () => import('./pages/socio/membresias/membresias').then(m => m.Membresias) },
            { path: 'socio/asistencias', loadComponent: () => import('./pages/socio/asistencias/asistencias').then(m => m.Asistencias) },
            { path: 'socio/tienda', loadComponent: () => import('./pages/socio/tienda/tienda').then(m => m.Tienda) },
            { path: 'socio/fitness', loadComponent: () => import('./pages/socio/fitness/fitness').then(m => m.Fitness) },
            { path: 'socio/perfil', loadComponent: () => import('./pages/socio/perfil/perfil').then(m => m.Perfil) },

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
