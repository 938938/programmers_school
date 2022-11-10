import CartPage from "./CartPage.js"
import ProductDetailPage from "./ProductDetailPage.js"
import ProductListPage from "./ProductListPage.js"
import { init } from "./router.js"

export default function App ({$target}) {
    this.route = () => {
        const {pathname} = location
        $target.innerHTML = ''
        
        if(pathname === '/web/'){
            // 상품목록페이지
            new ProductListPage({$target}).render()
        } else if (pathname.indexOf('/products/') === 0) {
            // 상품 상세 페이지
            const [, , productId] = pathname.split('/')
            new ProductDetailPage({
                $target,
                productId
            }).render();
        } else if (pathname === '/web/cart'){
            // 장바구니 페이지
            new CartPage({
                $target
            }).render()
        }
    }
    init(this.route)
    this.route()
    window.addEventListener('popstate', this.route)
}