import React from "react"
import CartCard from '../../components/CartCard/CartCard';
import { ContainerInformButton, CartValue, EmptyCart } from "./styled";
import Button  from "@material-ui/core/Button";


class CartPage extends React.Component {
    render() {
        const cartComponents = this.props.cart.map((item) => {
            return <CartCard key={item.id} title={item.title} price={item.price} id={item.id} removeFromCart={this.props.removeFromCart}/>
        })

        let totalPrice = 0

        this.props.cart.forEach((item) => {
            totalPrice += item.price
        })

        return (
            <div>
                {cartComponents.length > 0 ? (
                    <div>
                        <CartValue>
                        {cartComponents}
                        </CartValue>
                        <ContainerInformButton>
                        <span>Total: R${totalPrice.toFixed(2)}</span>
                        <Button variant="contained" onClick={() => this.props.clearCart()}>Finalizar Compra</Button>
                        <Button variant="contained" o onClick={() => this.props.changePage("list")}>Voltar para a Lista</Button>
                        </ContainerInformButton>
                    </div>
                    ) : (
                   <EmptyCart> <h1>Carrinho Vazio</h1></EmptyCart>
                    )}
            </div>
        )
    }
}

export default CartPage