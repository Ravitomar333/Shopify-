import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const EditProducts = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: '', stock: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/${id}`);
        if (!response.ok) throw new Error(`Product request failed: ${response.status}`);
        const product = await response.json();
        setFormData({
          name: product.name || '',
          description: product.description || '',
          price: product.price ?? '',
          category: product.category || '',
          stock: product.stock ?? ''
        });
      } catch (error) {
        console.error(error);
        alert('Unable to load this product.');
        navigate('/admin/products');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate, user]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (image) data.append('image', image);

    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${user.token}` },
        body: data
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Product update failed');

      alert('Product updated successfully.');
      navigate('/admin/products');
    } catch (error) {
      console.error(error);
      alert(error.message || 'Unable to update product.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div style={messageStyle}>Loading product...</div>;

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#f97316', marginBottom: '20px' }}>Edit Product</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required style={inputStyle} />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required rows="4" style={inputStyle} />
        <input name="price" type="number" min="0" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" required style={inputStyle} />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required style={inputStyle} />
        <input name="stock" type="number" min="0" value={formData.stock} onChange={handleChange} placeholder="Stock Quantity" required style={inputStyle} />
        <input type="file" accept="image/*" onChange={(event) => setImage(event.target.files[0] || null)} style={{ color: '#fff' }} />
        <button type="submit" disabled={saving} className="btn">
          {saving ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  );
};

const containerStyle = { maxWidth: '600px', margin: '40px auto', background: '#18181b', padding: '40px', borderRadius: '12px', color: '#fff' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', background: '#09090b', border: '1px solid #27272a', borderRadius: '6px', color: '#fff', fontSize: '15px' };
const messageStyle = { textAlign: 'center', margin: '80px 0', color: '#f97316' };

export default EditProducts;
