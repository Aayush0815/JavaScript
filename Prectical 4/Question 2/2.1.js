const RectangleArea = (length, width) => length * width;

const TriangleArea = (base, height) => 0.5 * base * height;

const CircleArea = radius => Math.PI * radius * radius;

const main = () => 
    {
    let choice = prompt("Enter the shape :");

    if (choice == "rectangle") 
        {
            let length = parseInt(prompt("Enter the length of the rectangle:"));
            let width = parseInt(prompt("Enter the width of the rectangle:"));
            let area = RectangleArea(length, width);
            console.log("The area of the rectangle is: " + area);
        } 
        else if (choice == "triangle") 
            {
            let base = parseInt(prompt("Enter the base of the triangle:"));
            let height = parseInt(prompt("Enter the height of the triangle:"));
            let area = TriangleArea(base, height);
            console.log("The area of the triangle is: " + area);
            }       
            else if (choice == "circle") 
                {
                    let radius = parseInt(prompt("Enter the radius of the circle:"));
                    let area = CircleArea(radius);
                    console.log("The area of the circle is: " + area);
                }        
                else 
                    {
                    console.log("Invalid choice. Please enter 'rectangle', 'triangle', or 'circle'.");
                    }
}

main();
