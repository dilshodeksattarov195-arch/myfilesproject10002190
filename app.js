const productDeleteConfig = { serverId: 6393, active: true };

const productDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6393() {
    return productDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module productDelete loaded successfully.");