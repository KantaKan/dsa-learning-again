package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

type Member struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func getMembers() ([]Member, error) {
	resp, err := http.Get("https://jsd5-mock-backend.onrender.com/members")
	if err != nil {
		return nil, fmt.Errorf("error fetching members: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("GET failed: %v", resp.Status)
	}

	body, _ := ioutil.ReadAll(resp.Body)

	var members []Member
	err = json.Unmarshal(body, &members)
	if err != nil {
		return nil, fmt.Errorf("error decoding response: %v", err)
	}

	return members, nil
}

func deleteMember(id string) error {
	client := &http.Client{}
	url := fmt.Sprintf("https://jsd5-mock-backend.onrender.com/members/%s", id)

	req, err := http.NewRequest("DELETE", url, nil)
	if err != nil {
		return err
	}

	// No auth needed, but you can add headers if required
	req.Header.Set("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	if res.StatusCode >= 200 && res.StatusCode < 300 {
		fmt.Printf("✅ Deleted member ID: %s\n", id)
	} else {
		fmt.Printf("❌ Failed to delete member ID: %s - Status %d\n", id, res.StatusCode)
	}

	return nil
}

func main() {
	members, err := getMembers()
	if err != nil {
		fmt.Println("Error getting members:", err)
		os.Exit(1)
	}

	for _, m := range members {
		err := deleteMember(m.ID)
		if err != nil {
			fmt.Printf("💥 Error deleting %s: %v\n", m.Name, err)
		}
	}

	fmt.Println("Done.")
}