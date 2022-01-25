import {createServer, Model, Response} from 'miragejs'
import ProductData from "../components/ProductData/ProductData";

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,

        models: {
            product: Model
        },

        seeds(server) {
            ProductData.map(item => server.create("product", item));
        },

        routes() {
            this.namespace = "api"

            this.get("/products", (schema) => {
                    return schema.products.all();
                }
            );
            this.get("/products/:id", (schema, request) => {
                    const id = request.params.id;
                    let productId = schema.products.find(id)
                    if (productId) return productId ;
                    else
                        return new Response(404, {}, {error: 'کالای مورد نظر یافت نشد'});
                }
            );

        }
    });

    return server;
}