import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ product, children, className, style, onChange}: Props) => {

    const { counter, increaseBy } = useProducts({onChange, product});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}
            style={style}
            >
                {children}
            </div>
        </Provider>

    )
}
