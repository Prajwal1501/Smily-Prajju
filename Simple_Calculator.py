# Simple Calculator Program in Python
# This program performs basic arithmetic operations:
# Addition, Subtraction, Multiplication, and Division

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
   
    if b == 0:
        return "Error! Division by zero is not allowed."
    return a / b

    
def main():
    print("===== Simple Calculator =====")
    print("Select Operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

    
    choice = input("Enter choice (1/2/3/4): ")

    
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input! Please enter numeric values.")
        return

   
    if choice == '1':
        print("Result:", add(num1, num2))

    elif choice == '2':
        print("Result:", subtract(num1, num2))

    elif choice == '3':
        print("Result:", multiply(num1, num2))

    elif choice == '4':
        print("Result:", divide(num1, num2))

    else:
        print("Invalid choice! Please select a valid operation.")


if __name__ == "__main__":
    main()