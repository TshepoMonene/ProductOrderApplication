using Domain;

namespace Persistence
{
    public class SeedData
    {
        public static async Task SeedProduct(DataContext context){

            if (!context.Products.Any()){
                var products = new List<Product>()
                {
                   
                    new Product {
                        Description = "Enjoy the original KITKAT® 4 Finger Milk Chocolate bar",
                        Price = 13,
                        Name = "Kitkat",
                        imageUrl = "./Assets/kitkat.jpg",
                        Quantity = 5

                    },
                     new Product {
                        Description = "Simba chips are made from only the very best potatoes grown right here in Southern Africa",
                        Price = 19.99m,
                        Name = "Simba",
                        imageUrl = "./Assets/Simba.jpg",
                        Quantity = 9

                    },
                        new Product {
                        Description = "An instant classic from the moment it was made",
                        Price = 18.99m,
                        Name = "Cardbury Slaps",
                        imageUrl = "./Assets/Cardbury.jpg",
                        Quantity = 9

                    },
                        new Product {
                        Description = "Nothing will beat this delicious and smooth espresso tart recipe",
                        Price = 54.79m,
                        Name = "Hersheys",
                        imageUrl = "./Assets/hersheys.jpg",
                        Quantity = 9

                    },
                        new Product {
                        Description = "It all starts with farm-grown potatoes, cooked and seasoned to perfection",
                        Price = 23.99m,
                        Name = "Lays",
                        imageUrl = "./Assets/lays.jpg",
                        Quantity = 12

                    },
                        new Product {
                        Description = "A pack of assorted fruity flavoured wine gum to enjoy as a treat.",
                        Price = 38.69m,
                        Name = "Maynards",
                        imageUrl = "./Assets/Maynards.jpg",
                        Quantity = 17

                    },
                           new Product {
                        Description = "Rich 'n Creamy. Tease your taste buds",
                        Price = 49.99m,
                        Name = "Ricn n Cream",
                        imageUrl = "./Assets/ola.jpg",
                        Quantity = 8

                    },
                           new Product {
                        Description = " Nutriday is South Africa's favourite yoghurt, and is found in fridges and lunchboxes across the country",
                        Price = 67.99m,
                        Name = "NutriDay",
                        imageUrl = "./Assets/nutriday.jpg",
                        Quantity = 11

                    },
                           new Product {
                        Description = "A rich coat of chocolate, ice cream infused with Madagascan Bourbon vanilla",
                        Price = 69.99m,
                        Name = "Magnum",
                        imageUrl = "./Assets/Magnum.jpg",
                        Quantity = 10

                    },
                           new Product {
                        Description = "Bakers Tennis biscuits, which have been around since 1911, are still South Africa's most popular coconut biscuit",
                        Price = 24.99m,
                        Name = "Tennis",
                        imageUrl = "./Assets/Tennis.jpg",
                        Quantity = 16

                    }

                };

                context.AddRange(products);
                await context.SaveChangesAsync();
                
            }

        }
    }
}