import {createServer, Model, Response} from 'miragejs'
import ProductData from "../../components/ProductData/ProductData";
import {AssortmentCardData} from "../../components/ProductData/ProductData"

// import {AssortmentOfferData} from "../../components/ProductData/ProductData"
export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,

        models: {
            product: Model,
            assortmentCard: Model,
            // AssortmentOffer: Model
        },

        seeds(server) {
            ProductData.map(item => server.create("product", item));
            AssortmentCardData.map(item => server.create("AssortmentCard", item));
            // AssortmentOfferData.map(item => server.create("AssortmentOffer", item));
        },

        routes() {
            this.namespace = "api"

            this.get("/products", (schema) => {
                    return schema.products.all();
                }
            );

            this.get("/assortmentCard", (schema) => {
                    return schema.assortmentCards.all();
                }
            );

            this.get("category/:categoryName", (schema, request) => {
                const category = request.params.categoryName
                return schema.products.all().filter(item => item.categoryEn === category)
            })

            // this.get("categoryItems/:categoryName", (schema, request) => {
            //     const category = request.params.category
            //     return schema.products.all().filter(item => item.category.categoryEn === category)
            // })



            this.get("/products/:id", (schema, request) => {
                    const id = request.params.id;
                    let productId = schema.products.find(id)
                    if (productId) return productId;
                    else
                        return new Response(404, {}, {error: 'کالای مورد نظر یافت نشد'});
                }
            );

            this.namespace = ""
            this.passthrough()

        }
    });

    return server;
}