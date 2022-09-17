using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class GameDirector : MonoBehaviour
{
    [SerializeField]
    private TextMeshProUGUI tokenAmountText;

    void Start()
    {
        Debug.Log("start");
        tokenAmountText.text = "<bounce a=5>321.45</bounce>";
    }

    void Update()
    {
        //Debug.Log("update");
        //tokenAmountText.text = "<bounce a=5>UPDATED</bounce>";
    }
}
