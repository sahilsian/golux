using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.SignalR;

namespace Api.Hubs;



public class AppHub : Hub
{
    public async Task RecieveEvent(object evt)
    {
        Console.WriteLine($"[Server] Event received: {evt}");
        var json = JsonSerializer.Serialize(evt);
        var jObj = JsonObject.Parse(json);
        jObj["origin"] = "server";
        await Clients.All.SendAsync("RecieveEvent", jObj);
    }
}