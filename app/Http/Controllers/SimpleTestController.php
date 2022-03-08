<?php

namespace App\Http\Controllers;

use App\Mail\SendSubmittedData;
use App\Models\DataSet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SimpleTestController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index ()
    {
        return view ( 'test' );
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store ( Request $request )
    {
        $model = DataSet ::insert_data ( $request );
        Mail ::to ( "devtech790@gmail.com" ) -> send ( new SendSubmittedData( $model -> data ) );
        return response () -> json ( [ "status" => "success", "data" => $model ], 200 );
    }
}
