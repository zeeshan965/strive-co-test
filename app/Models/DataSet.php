<?php

namespace App\Models;

use App\Facades\Helper;
use App\Mail\SendPostUpdateMailable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DataSet extends Model
{
    /** @var string[] */
    protected $guarded = [ 'id' ];

    /**
     * Decode data json to object
     * @param $value
     * @return mixed
     */
    public function getDataAttribute ( $value )
    {
        return json_decode ( $value, true );
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public static function insert_data ( Request $request )
    {
        $data = $request -> post ( "messages", [] );
        return self ::create ( [
            'data' => json_encode ($data),
        ] );
    }
}
