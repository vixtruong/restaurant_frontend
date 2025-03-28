import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  imports: [CommonModule, MenuModule, RouterModule],
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {

  items = [
    {
      label: 'Trang chủ',
      items: [
        { label: 'Dashboard', icon: 'pi pi-home', route: '/admin'}
      ]
    },
    {
      label: 'Đơn hàng',
      items: [
        { label: 'Quản lý đơn hàng', icon: 'pi pi-box', route: '/orders/create' },
        { label: 'Tạo hóa đơn', icon: 'pi pi-file', route: '/orders/invoice' },
        { label: 'Xem đơn hàng trong ngày', icon: 'pi pi-calendar', route: '/orders/today' },
      ]
    },
    {
      label: 'Món ăn',
      items: [
        { label: 'Quản lý món ăn', icon: 'pi pi-cog', route: '/admin/menu-items/manage' },
        { label: 'Thêm món ăn', icon: 'pi pi-plus-circle', route: '/admin/menu-items/add' }
      ]
    },
    {
      label: 'Bếp',
      items: [
        { label: 'Quản lý thực đơn khách đặt', icon: 'pi pi-check-square', route: '/kitchen/confirm' },
        { label: 'Cập nhật món ăn', icon: 'pi pi-refresh', route: '/kitchen/update-status' },
        { label: 'Quản lý nguyên liệu', icon: 'pi pi-box', route: '/kitchen/ingredients' }
      ]
    },
    // {
    //   label: 'Khách hàng',
    //   items: [
    //     { label: 'Duyệt thực đơn', icon: 'pi pi-eye', route: '/menu' },
    //     { label: 'Gọi món', icon: 'pi pi-phone', route: '/order' },
    //     { label: 'Hủy món chưa xác nhận', icon: 'pi pi-times-circle', route: '/cancel-unconfirmed' },
    //     { label: 'Xem trạng thái đơn hàng', icon: 'pi pi-info-circle', route: '/order/status' },
    //     { label: 'Yêu cầu thanh toán', icon: 'pi pi-credit-card', route: '/order/payment' }
    //   ]
    // },
    {
      label: 'Nhân viên',
      items: [
        { label: 'Quản lý nhân viên', icon: 'pi pi-user-edit', route: '/staff/manage' },
        { label: 'Thêm / Sửa thông tin', icon: 'pi pi-user-plus', route: '/staff/edit' }
      ]
    },
    {
      label: 'Thống kê',
      items: [
        { label: 'Theo dõi doanh thu', icon: 'pi pi-dollar', route: '/stats/revenue' }
      ]
    }
  ];
  
}
