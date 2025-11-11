# Namespace: Reducers.System.*

High-level abstraction and utility layer for managing the application's SignalR connection lifecycle and WebSocket state.

This namespace provides actions for connecting, disconnecting, and clearing errors from the system connection.

---

## Hook: `useSystem()`

Manages all reactive state and actions related to the global SignalR connection.

### Description
The `useSystem` hook exposes the current SignalR connection object and status, as well as utilities to connect, disconnect, and clear connection errors.  
It acts as a lightweight interface between React components and the Redux-based system store.

---

## Returned Object

| Property | Type | Description |
|-----------|------|-------------|
| **connection** | `HubConnection \| null` | The current SignalR connection instance, or `null` if disconnected. |
| **status** | `string` | Represents the current connection status (e.g., `"disconnected"`, `"connecting"`, `"connected"`). |
| **error** | `string \| null` | The latest connection error, if any. |
| **connect(url: string)** | `function` | Establishes a new connection to the specified URL. Internally dispatches `createConnection()`. |
| **disconnect()** | `function` | Terminates the current SignalR connection and dispatches `removeConnection()`. |
| **clearConnectionError()** | `function` | Clears the current error state by dispatching `clearError()`. |

---

## Internal Dependencies

| Dependency | Purpose |
|-------------|----------|
| `useDispatch`, `useSelector` (React Redux) | State and action dispatching. |
| `AppDispatch`, `RootState` | Strongly typed Redux store interfaces. |
| `createConnection`, `removeConnection`, `clearError` | Actions imported from `systemSlice.ts` managing SignalR state. |

---

## Example Usage

```tsx
import React, { useEffect } from "react";
import useSystem from "@/core/system/useSystem";

const ConnectionStatus = () => {
  const { status, error, connect, disconnect, clearConnectionError } = useSystem();

  useEffect(() => {
    connect("https://example.com/hub");
    return () => disconnect();
  }, []);

  return (
    <div>
      <p>Status: {status}</p>
      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={clearConnectionError}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
