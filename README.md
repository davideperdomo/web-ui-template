# Web UI Template with Clean Architecture and App Router

Welcome to the **Web UI Template** repository! This project is designed as a starter template for building scalable and maintainable web applications using **Next.js** with the **App Router** and a **Clean Architecture** approach.

---

## 🚀 **Features**
- **Next.js App Router**: Leverages the latest routing capabilities introduced in Next.js.
- **Clean Architecture**: Organizes code with a clear separation of concerns:
  - Presentation
  - Application (Use Cases)
  - Domain (Entities & Repositories)
  - Infrastructure (APIs or Mock Repositories)
- **TypeScript**: Fully typed for a safer development experience.
- **Mock Data**: Easy-to-use mock repositories for rapid prototyping.
- **Scalable Structure**: Modular organization for seamless feature expansion.

---

## 🏗️ **Project Structure Base**
```
app/
- user/
-- components/
--- UserView.tsx
-- page.tsx
-- ...
modules/
- user/
-- presentation/
--- useUser.tsx
-- application/
--- GetUser.useCase.ts
-- domain/
--- User.entity.ts
--- User.repository.ts
-- infrastructure/
--- MockUser.repository.ts
```

### Key Folders:
1. **`app/`**: Handles routes and visual components.
   - `user/`: Contains pages and UI components for user-related features.
2. **`modules/`**: Implements the Clean Architecture layers:
   - **Presentation**: `useUser.tsx` (acts as a Bloc for state management).
   - **Application**: `GetUser.useCase.ts` (handles business logic).
   - **Domain**: Defines core entities and repository interfaces.
   - **Infrastructure**: Mock or real repositories.

---

## 🔧 **Getting Started**

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/web-ui-template.git
   cd web-ui-template
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## 🖥️ **How It Works**

### Example: User Info Page
1. The `/user-info` page fetches user data through the `useUser` presentation layer.
2. The presentation layer uses the `GetUser` use case to retrieve the data.
3. The `GetUser` use case fetches the data from the `MockUserRepository`, a part of the infrastructure layer.
4. The user data is passed to `UserView` for rendering.

---

## 📁 **File Overview**

### `app/user-info/page.tsx`
Initializes the user info page and connects the UI with the presentation layer.

### `modules/user/presentation/useUser.tsx`
Handles state management and coordinates between the application layer and UI.

### `modules/user/application/GetUser.useCase.ts`
Executes the logic to fetch user data from the repository.

### `modules/user/domain/User.entity.ts`
Defines the user entity.

### `modules/user/infrastructure/MockUser.repository.ts`
Provides mock user data for rapid development.

---

## 🛠️ **Customization**
- Replace `MockUser.repository.ts` with your actual API implementation.
- Extend the `modules/user` folder for additional features (e.g., user creation, deletion).

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to submit issues or pull requests for improvements.

---

## 📄 **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 **Contact**
For questions or sug-gestions, reach out to:
- [David](mailto:daeperdomocr@unal.edu.co)
- [GitHub Issues](https://github.com/davideperdomo/web-ui-template/issues) 

Happy coding! 🎉