

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
  const res = await fetch(`${API_BASE}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}


export async function getProducts() {
  const res = await fetch(`${API_BASE}/api/medicines`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}







export async function addToCart(medicineId: string, quantity = 1) {
  const res = await fetch(`${API_BASE}/api/customer/cart`, {
    method: "POST",
    credentials: "include", // 🔥 important for Better Auth session
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ medicineId, quantity }),
  });

  if (!res.ok) throw new Error("Failed to add to cart");
  return res.json();
}


export async function getCart() {
  const res = await fetch(`${API_BASE}/api/customer/cart`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
}


export async function updateCartItem(id: string, quantity: number) {
  const res = await fetch(`${API_BASE}/api/customer/cart/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) throw new Error("Failed to update cart item");
}


export async function removeCartItem(id: string) {
  const res = await fetch(`${API_BASE}/api/customer/cart/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to remove cart item");
}



export async function placeOrder(shipping: {
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}) {
  const res = await fetch(`${API_BASE}/api/customer/orders`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      shipping,
      paymentMethod: "COD",
    }),
  });

  if (!res.ok) throw new Error("Order failed");
  return res.json();
}




export async function getOrders() {
  const res = await fetch(`${API_BASE}/api/customer/orders`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}


export async function getOrderById(orderId: string) {
  const res = await fetch(`${API_BASE}/api/customer/orders/${orderId}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}

