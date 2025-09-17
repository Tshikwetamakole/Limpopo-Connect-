import { createContext, useContext, useState, useEffect } from 'react';

// Mock user database (in a real app, this would be on a backend)
const MOCK_USERS = [
  {
    id: 1,
    email: 'demo@limpopoconnect.com',
    password: 'demo123',
    name: 'Demo User',
    avatar: 'DU',
    location: 'Polokwane',
    bio: 'Welcome to Limpopo Connect!',
    interests: ['Community', 'Events', 'Networking']
  }
];

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('limpopo_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('limpopo_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('limpopo_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('limpopo_user');
    }
  }, [user]);

  const login = async (email, password) => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check credentials
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);

    if (foundUser) {
      // Remove password from user object before storing
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      setUser(userWithoutPassword);
      setIsLoading(false);
      return { success: true };
    } else {
      setIsLoading(false);
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const register = async (userData) => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === userData.email);

    if (existingUser) {
      setIsLoading(false);
      return { success: false, error: 'User with this email already exists' };
    }

    // Create new user
    const newUser = {
      id: MOCK_USERS.length + 1,
      ...userData,
      avatar: userData.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      interests: [],
      bio: ''
    };

    // Add to mock database
    MOCK_USERS.push({ ...newUser, password: userData.password });

    // Remove password before setting as current user
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setUser(userWithoutPassword);
    setIsLoading(false);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    if (user) {
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      return { success: true };
    }
    return { success: false, error: 'No user logged in' };
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};