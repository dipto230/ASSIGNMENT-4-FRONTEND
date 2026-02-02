



const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://medistore-assignment-70.vercel.app";



export async function getCategories() {
  const res = await fetch(`${API_BASE}/api/categories`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}


export async function getProducts() {
  const res = await fetch(`${API_BASE}/api/medicines`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}







export async function addToCart(medicineId: string, quantity = 1) {
  const res = await fetch(`${API_BASE}/api/customer/cart`, {
    method: "POST",
    credentials: "include", 

    headers: {
      "Content-Type": "application/json",
      
      
     },
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





export async function addMedicine(data: {
  name: string;
  description: string;
  manufacturer: string;
  price: number;
  stock: number;
  categoryId: string;
  image: string;
}) {
  const res = await fetch(`${API_BASE}/api/seller/medicines`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to add medicine");
  return res.json();
}










export async function getSellerOrders() {
  const res = await fetch(`${API_BASE}/api/seller/orders`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch seller orders");
  return res.json();
}



export async function updateSellerOrderStatus(
  itemId: string,
  status: "PROCESSING" | "SHIPPED" | "DELIVERED"
) {
  const res = await fetch(`${API_BASE}/api/seller/orders/${itemId}/status`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) throw new Error("Failed to update order status");
  return res.json();
}




























export async function getAdminOrders() {
  const res = await fetch(`${API_BASE}/api/admin/orders`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function getAdminUsers() {
  const res = await fetch(`${API_BASE}/api/admin/users`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function updateUserStatus(userId: string, status: "ACTIVE" | "BANNED") {
  const res = await fetch(`${API_BASE}/api/admin/users/${userId}/status`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update user");
}

export async function getAdminCategories() {
  const res = await fetch(`${API_BASE}/api/admin/categories`, {
    credentials: "include",
  });
  return res.json();
}

export async function createCategory(name: string) {
  const res = await fetch(`${API_BASE}/api/admin/categories`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function approveMedicine(id: string) {
  const res = await fetch(`${API_BASE}/api/admin/medicines/${id}/approve`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "APPROVE" }),
  });
  return res.json();
}

export async function toggleMedicineAvailability(id: string, status: "AVAILABLE" | "UNAVAILABLE") {
  const res = await fetch(`${API_BASE}/api/admin/medicines/${id}/availability`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
}




